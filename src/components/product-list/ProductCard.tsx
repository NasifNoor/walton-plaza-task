"use client";

import { useCart } from "@/features/cart/CartContext";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

interface Discount {
  amount: number;
  value: number;
  type: "flat" | "percentage";
}

interface Variant {
  mrpPrice: number;
  quantity: number;
  discount?: Discount | null;
}

interface ProductImage {
  url: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const image = product.images[0]?.url || "/placeholder-product.jpg";

  const variant = product.variants?.[0];

  const discountAmount: number = variant?.discount?.amount ?? 0;
  const discountType: string | undefined = variant?.discount?.type;

  const hasDiscount: boolean = !!discountAmount;

  const mrpPrice: number = variant?.mrpPrice ?? 0;

  //   const sellingPrice: number = hasDiscount
  //     ? (variant?.discount?.value ?? 0)
  //     : mrpPrice;

  const sellingPrice: number =
    discountType == "FLAT"
      ? mrpPrice - discountAmount
      : discountType == "PERCENTAGE"
        ? mrpPrice - (mrpPrice * discountAmount) / 100
        : mrpPrice;
  const stock = variant?.quantity ?? 0;

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    addItem({
      uid: product?.uid,
      name: product?.enName,
      price: sellingPrice,
      quantity: 1,
    });
  };

  return (
    <Link
      href={`/products/${product.uid}`}
      className="overflow-hidden rounded-lg border border-gray-300 bg-white transition-all duration-300 hover:shadow-2xl"
    >
      <div className="relative h-64 overflow-hidden bg-gray-50">
        <Image
          src={image}
          alt={product.enName}
          height={500}
          width={500}
          loading="lazy"
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105
          "
        />

        {hasDiscount && (
          <div className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
            {discountType === "percentage"
              ? `${discountAmount}% OFF`
              : `৳${discountAmount} OFF`}
          </div>
        )}
      </div>

      <div className="space-y-3 p-4">
        <h3 className="line-clamp-2 min-h-16 text-sm font-bold text-gray-900">
          {product.enName}
        </h3>

        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-green-600">
              ৳{sellingPrice?.toLocaleString()}
            </span>

            {hasDiscount && (
              <span className="text-sm text-gray-400 line-through">
                ৳{mrpPrice?.toLocaleString()}
              </span>
            )}
          </div>
        </div>

        <div>
          {stock > 0 ? (
            <span className="text-sm font-medium text-green-600">In Stock</span>
          ) : (
            <span className="text-sm font-medium text-red-500 ">
              Out of Stock
            </span>
          )}
        </div>

        <button
          disabled={stock === 0}
          className={`w-full rounded-lg px-4 py-2 text-sm font-medium transition-colors ${stock > 0 ? "bg-black text-white hover:bg-gray-800" : "cursor-not-allowed bg-gray-200 text-gray-500"}`}
          onClick={handleAddToCart}
        >
          {stock > 0 ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </Link>
  );
}
