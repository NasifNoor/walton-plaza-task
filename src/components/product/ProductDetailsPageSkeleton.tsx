import BasicDetailsSkeleton from "./BasicDetailsSkeleton";
import ProductDetailsImageSkeleton from "./ProductDetailsImageSkeleton";
import ProductDetailsSkeleton from "./ProductDetailsSkeleton";

export default async function ProductDetailsPageSkeleton() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid gap-10 lg:grid-cols-2">
        <ProductDetailsImageSkeleton />

        <ProductDetailsSkeleton />
      </div>
      <BasicDetailsSkeleton />
    </main>
  );
}
