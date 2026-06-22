"use client";

import { useCart } from "@/features/cart/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const { openCart, items, cartCount } = useCart();

  return (
    <div
      style={{ display: "flex", justifyContent: "space-between" }}
      className="mb-8"
    >
      <Link href={"/products"}>
        <h1 className="text-3xl font-bold cursor-pointer">Walton Products</h1>
      </Link>
      <div className="-mt-5">
        {cartCount > 0 ? (
          <span className="relative top-3 -right-7 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            {cartCount}
          </span>
        ) : (
          <span
            style={{ visibility: "hidden" }}
            className="relative top-3 -right-7 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white"
          >
            {cartCount}
          </span>
        )}
        <Image
          src="/cart.png"
          height={30}
          width={35}
          alt="cart"
          onClick={openCart}
          className="cursor-pointer hover:scale-110 duration-300"
        />
      </div>
    </div>
  );
}
