export default function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="h-64 animate-pulse bg-gray-200" />

      <div className="space-y-3 p-4">
        <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
        <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />

        <div className="h-6 w-28 animate-pulse rounded bg-gray-200" />

        <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />

        <div className="h-10 w-full animate-pulse rounded-lg bg-gray-200" />
      </div>
    </div>
  );
}
