export default function SidebarSkeleton() {
  return (
    <aside className="rounded-xl p-5 pl-0">
      <div className="mb-6 h-6 w-24 animate-pulse rounded bg-gray-200" />
      <div className="mb-6">
        <div className="mb-3 h-5 w-28 animate-pulse rounded bg-gray-200" />
        <div className="space-y-3">
          <div className="h-10 w-full animate-pulse rounded bg-gray-200" />
          <div className="h-10 w-full animate-pulse rounded bg-gray-200" />
        </div>
      </div>
      <div>
        <div className="mb-3 h-5 w-28 animate-pulse rounded bg-gray-200" />

        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="h-4 w-4 animate-pulse rounded-full bg-gray-200" />
              <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
