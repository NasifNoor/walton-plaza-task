export default function ProductDetailsSkeleton() {
  return (
    <div>
      <div className="mb-6">
        <div className="mb-3 h-8 w-full animate-pulse rounded bg-gray-200" />
        <div className="h-8 w-3/4 animate-pulse rounded bg-gray-200" />
      </div>
      <div className="mb-6">
        <div className="h-10 w-1/2 animate-pulse rounded bg-gray-200" />
      </div>
      <div className="mb-6">
        <div className="h-7 w-1/2 animate-pulse rounded bg-gray-200" />
      </div>
      <div className="mb-6 flex items-center gap-3">
        <div className="h-10 w-10 animate-pulse rounded bg-gray-200" />
        <div className="h-6 w-8 animate-pulse rounded bg-gray-200" />
        <div className="h-10 w-10 animate-pulse rounded bg-gray-200" />
      </div>
      <div className="flex gap-4">
        <div className="h-12 w-40 animate-pulse rounded-lg bg-gray-200" />
        <div className="h-12 w-40 animate-pulse rounded-lg bg-gray-200" />
      </div>
    </div>
  );
}
