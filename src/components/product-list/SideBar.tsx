export default function SideBar() {
  return (
    <aside className="rounded-xl pl-0 p-5">
      <h2 className="mb-4 text-lg font-semibold">Filters</h2>

      <div className="mb-6">
        <h3 className="mb-3 font-medium">Price Range</h3>

        <div className="space-y-3">
          <input
            type="number"
            placeholder="Min"
            className="w-full rounded border px-3 py-2"
          />

          <input
            type="number"
            placeholder="Max"
            className="w-full rounded border px-3 py-2"
          />
        </div>
      </div>
      <div className="mb-6">
        <h3 className="mb-3 font-medium">Category</h3>

        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Air Conditioner
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Refrigerator
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Television
          </label>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="mb-3 font-medium">Availability</h3>

        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="radio" name="availability" />
            In Stock
          </label>

          <label className="flex items-center gap-2">
            <input type="radio" name="availability" />
            Out Of Stock
          </label>
        </div>
      </div>
    </aside>
  );
}
