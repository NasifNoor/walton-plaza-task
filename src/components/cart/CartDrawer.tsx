"use client";

import { useCart } from "@/features/cart/CartContext";
import { useMemo } from "react";

export default function CartDrawer() {
  const { items, isCartOpen, closeCart, removeItem, updateQuantity } =
    useCart();

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  );

  return (
    <>
      {isCartOpen && (
        <div
          className="
            fixed inset-0 z-40
            bg-black/40
          "
          onClick={closeCart}
        />
      )}

      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-95 bg-white shadow-xl transition-transform duration-300 ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="text-xl font-semibold">Shopping Cart</h2>

            <button onClick={closeCart} className="text-xl">
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <p className="text-gray-500">Cart is empty</p>
            ) : (
              items.map((item) => (
                <div key={item.uid} className="mb-4 flex gap-3 border-b pb-4">
                  <div className="flex-1">
                    <h3 className="font-medium">Name: {item.name}</h3>

                    <p>Unit Price: ৳{item.price}</p>
                    <div className="d-flex">
                      <span>Quantity: {item.quantity}</span>
                      <button
                        className="h-8 mx-3 cursor-pointer w-10 rounded border disabled:bg-gray-300"
                        onClick={() =>
                          updateQuantity(item.uid, item.quantity - 1)
                        }
                        disabled={item.quantity === 1}
                      >
                        -
                      </button>
                      <button
                        className="h-8 w-10 cursor-pointer rounded border disabled:bg-gray-300"
                        onClick={() =>
                          updateQuantity(item.uid, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.uid)}
                    className="text-red-700 font-bold text-2xl  cursor-pointer"
                  >
                    🗑
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="border-t p-4">
            <div className="mb-4 flex justify-between font-semibold">
              <span>Total</span>
              <span>৳{total.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
