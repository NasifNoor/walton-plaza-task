import { SortOption } from "@/types/option";

interface ProductListHeaderProps {
  handleSort: (sortBy: SortOption) => void;
}
export default function ProductListHeader({
  handleSort,
}: ProductListHeaderProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <select
        className="rounded-lg border px-4 py-3"
        onChange={(e) => handleSort(e.target.value as SortOption)}
      >
        <option value="priceAsc">Price Low to High</option>
        <option value="priceDsc">Price High to Low</option>
      </select>
    </div>
  );
}
