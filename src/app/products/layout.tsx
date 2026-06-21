import CartDrawer from "@/components/cart/CartDrawer";
import CartSkeleton from "@/components/cart/CartSkeleton";
import Navbar from "@/components/navbar/Navbar";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Navbar />
        <Suspense fallback={<CartSkeleton />}>
          <CartDrawer />
        </Suspense>

        {children}
      </div>
    </main>
  );
}
