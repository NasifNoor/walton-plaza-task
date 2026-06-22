import { StockFilter } from "@/types/option";
import { useRef } from "react";

interface SidebarProps {
  stockFilter: StockFilter;
  handleStockFilter: (value: StockFilter) => void;
  handleClearFilter: () => void;
  setMinPrice: (value: number) => void;
  setMaxPrice: (value: number) => void;
}
export default function SideBar({
  stockFilter,
  handleStockFilter,
  handleClearFilter,
  setMinPrice,
  setMaxPrice,
}: SidebarProps) {
  const minRef = useRef<HTMLInputElement>(null);
  const maxRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    handleClearFilter();
    minRef.current && (minRef.current.value = "");
    maxRef.current && (maxRef.current.value = "");
  };

  return (
    <aside className="rounded-xl pl-0 p-5">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 className="mb-4 text-lg font-semibold">Filters</h2>
        <h6
          className="mb-4 text-sm underline text-blue-700 cursor-pointer"
          onClick={handleClear}
        >
          Clear filters
        </h6>
      </div>

      <div className="mb-6">
        <h3 className="mb-3 font-medium">Price Range</h3>

        <div className="space-y-3">
          <input
            type="number"
            ref={minRef}
            placeholder="Min"
            onChange={(e) => {
              setTimeout(() => {
                setMinPrice(parseInt(e.target.value));
              }, 500);
            }}
            className="w-full rounded border px-3 py-2"
          />

          <input
            type="number"
            ref={maxRef}
            placeholder="Max"
            onChange={(e) => {
              setTimeout(() => {
                setMaxPrice(parseInt(e.target.value));
              }, 500);
            }}
            className="w-full rounded border px-3 py-2"
          />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="mb-3 font-medium">Availability</h3>

        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="availability"
              checked={stockFilter === ""}
              onChange={() => handleStockFilter("")}
            />
            All
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="availability"
              checked={stockFilter === "inStock"}
              onChange={() => handleStockFilter("inStock")}
            />
            In Stock
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="availability"
              checked={stockFilter === "outOfStock"}
              onChange={() => handleStockFilter("outOfStock")}
            />
            Out Of Stock
          </label>
        </div>
      </div>
    </aside>
  );
}
