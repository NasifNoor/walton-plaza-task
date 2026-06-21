import ProductListSkeleton from "./ProductListSkeleton";
import SidebarSkeleton from "./SidebarSkeleton";

export default function ProductListingPageSkeleton() {
  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <SidebarSkeleton />
      <ProductListSkeleton />
    </div>
  );
}
