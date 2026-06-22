"use client";

import { useCart } from "@/features/cart/CartContext";
import { Product } from "@/types/product";
import { useState } from "react";

interface ProductDetailsProps {
  product: Product;
}
export default function ProductDetails({ product }: ProductDetailsProps) {
  const [productCount, setProductCount] = useState(1);
  const { addItem } = useCart();

  const variant = product?.variants?.[0];

  const discountAmount: number = variant?.discount?.amount ?? 0;
  const quantity: number = variant?.quantity ?? 0;
  const discountType: string | undefined = variant?.discount?.type;

  const hasDiscount: boolean = !!discountAmount;

  const mrpPrice: number = variant?.mrpPrice ?? 0;

  const sellingPrice: number =
    discountType == "FLAT"
      ? mrpPrice - discountAmount
      : discountType == "PERCENTAGE"
        ? mrpPrice - (mrpPrice * discountAmount) / 100
        : mrpPrice;

  const handleAddToCart = () => {
    addItem({
      uid: product?.uid,
      name: product?.enName,
      price: sellingPrice,
      quantity: productCount,
    });
    setProductCount(1);
  };

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">{product?.enName}</h1>

      <div className="mb-6">
        <div className="flex items-center gap-3">
          <span className="text-4xl font-bold text-green-600">
            ৳{sellingPrice.toLocaleString()}
          </span>

          {hasDiscount && (
            <>
              <span className="text-xl text-gray-400 line-through">
                ৳{variant?.mrpPrice.toLocaleString()}
              </span>

              <span className="rounded bg-red-500 px-2 py-1 text-xs font-semibold text-white">
                {variant?.discount?.amount}% OFF
              </span>
            </>
          )}
        </div>
      </div>
      <div className="mb-6">
        {quantity && quantity > 0 ? (
          <span className="font-medium text-green-600">In Stock</span>
        ) : (
          <span className="font-medium text-red-500">Out Of Stock</span>
        )}
      </div>

      <div className="mb-6 flex items-center gap-3">
        <button
          className="h-10 w-10 rounded border border-gray-400 disabled:bg-gray-300"
          disabled={productCount == 1}
          onClick={() => setProductCount((prev) => prev - 1)}
        >
          -
        </button>

        <span className="font-medium">{productCount}</span>

        <button
          className="h-10 w-10 rounded border border-gray-400 disabled:bg-gray-300"
          disabled={productCount == quantity}
          onClick={() => setProductCount((prev) => prev + 1)}
        >
          +
        </button>
      </div>

      <div className="flex gap-4">
        <button
          className="rounded-lg bg-black px-6 py-3 text-white"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>

        <button
          className="rounded-lg border border-gray-400 px-6 py-3 disabled:bg-gray-300 cursor-not-allowed"
          disabled
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
