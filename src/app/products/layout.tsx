import CartDrawer from "@/components/cart/CartDrawer";
import Navbar from "@/components/navbar/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Navbar />
        <CartDrawer />

        {children}
      </div>
    </main>
  );
}
