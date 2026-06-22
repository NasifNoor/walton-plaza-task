"use client";

import { Product } from "@/types/product";
import { useMemo, useState } from "react";
import ProductList from "./ProductList";
import SideBar from "./SideBar";
import { StockFilter } from "@/types/option";
interface ProductListProps {
  products: Product[];
}
export default function ProductListingPage({ products }: ProductListProps) {
  const [stockFilter, setStockFilter] = useState<StockFilter>("");
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const stock = product.variants?.[0]?.quantity ?? 0;

        switch (stockFilter) {
          case "inStock":
            return stock >= 0;

          case "outOfStock":
            return stock < 0;

          default:
            return true;
        }
      })
      .filter((item) => {
        const price = item.variants?.[0]?.mrpPrice ?? 0;

        const min = Number(minPrice);
        const max = Number(maxPrice);

        if (!minPrice && !maxPrice) {
          return true;
        }

        if (minPrice && !maxPrice) {
          return price >= min;
        }

        if (!minPrice && maxPrice) {
          return price <= max;
        }

        return price >= min && price <= max;
      });
  }, [products, stockFilter, minPrice, maxPrice]);

  const handleStockFilter = (value: StockFilter) => {
    setStockFilter(value);
  };

  const handleClearFilter = () => {
    setStockFilter("");
    setMinPrice(null);
    setMaxPrice(null);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <SideBar
        stockFilter={stockFilter}
        handleStockFilter={handleStockFilter}
        handleClearFilter={handleClearFilter}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}
