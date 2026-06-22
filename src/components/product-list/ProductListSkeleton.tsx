import ProductCardSkeleton from "./ProductCardSkeleton";

export default function ProductListSkeleton() {
  return (
    <section>
      <div className="mb-5 flex items-center justify-between">
        <div className="h-6 w-60 animate-pulse rounded bg-gray-200" />

        <div className="h-12 w-52 animate-pulse rounded-lg bg-gray-200" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}
