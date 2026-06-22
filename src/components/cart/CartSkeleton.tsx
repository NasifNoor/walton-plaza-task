export default function CartSkeleton() {
  return (
    <aside className="fixed right-0 top-0 z-50 h-screen w-95 bg-white shadow-xl">
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b p-4">
          <div className="h-7 w-36 animate-pulse rounded bg-gray-200" />

          <div className="h-6 w-6 animate-pulse rounded bg-gray-200" />
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="mb-4 border-b pb-4">
              <div className="mb-3 h-5 w-full animate-pulse rounded bg-gray-200" />

              <div className="mb-2 h-4 w-32 animate-pulse rounded bg-gray-200" />

              <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
            </div>
          ))}
        </div>

        <div className="border-t p-4">
          <div className="flex justify-between">
            <div className="h-5 w-16 animate-pulse rounded bg-gray-200" />
            <div className="h-5 w-24 animate-pulse rounded bg-gray-200" />
          </div>
        </div>
      </div>
    </aside>
  );
}
