"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface CartItem {
  uid: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  cartCount: number;

  isCartOpen: boolean;

  addItem: (item: CartItem) => void;
  updateQuantity: (uid: string, quantity: number) => void;
  removeItem: (uid: string) => void;

  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");

    if (storedCart) {
      setItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => setIsCartOpen(false);
  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  const addItem = (item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.uid === item.uid);

      if (existing) {
        return prev.map((i) =>
          i.uid === item.uid
            ? {
                ...i,
                quantity: i.quantity + item.quantity,
              }
            : i,
        );
      }

      return [...prev, item];
    });
  };

  const updateQuantity = (uid: string, quantity: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.uid === uid
          ? {
              ...item,
              quantity,
            }
          : item,
      ),
    );
  };

  const removeItem = (uid: string) => {
    setItems((prev) => prev.filter((item) => item.uid !== uid));
  };

  return (
    <CartContext.Provider
      value={{
        items,
        cartCount,

        isCartOpen,

        addItem,
        updateQuantity,
        removeItem,

        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
