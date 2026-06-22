export default function ProductDetailsImageSkeleton() {
  return (
    <div>
      <div className="mb-4 h-112.5 animate-pulse rounded-xl bg-gray-200" />
      <div className="flex gap-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-24 w-24 animate-pulse rounded-lg bg-gray-200"
          />
        ))}
      </div>
    </div>
  );
}
