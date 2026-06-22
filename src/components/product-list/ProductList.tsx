"use client";

import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import ProductListHeader from "./ProductListHeader";
import { useEffect, useState } from "react";
import { SortOption } from "@/types/option";

interface ProductListProps {
  products: Product[];
}
export default function ProductList({ products }: ProductListProps) {
  const [productList, setProductList] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortOption>("");

  const ITEMS_PER_PAGE = 10;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const endIndex = startIndex + ITEMS_PER_PAGE;

  let paginatedProducts = productList.slice(startIndex, endIndex);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  useEffect(() => {
    setProductList(products);
    handleSort(sortBy, products);
  }, [products]);

  const getPrice = (product: Product) => product.variants?.[0]?.mrpPrice ?? 0;

  const handleSort = (sortBy: SortOption, productListArg?: Product[]) => {
    setSortBy(sortBy);
    const sorted = productListArg ? [...productListArg] : [...productList];

    switch (sortBy) {
      case "priceAsc":
        sorted.sort((a, b) => getPrice(a) - getPrice(b));
        break;

      case "priceDsc":
        sorted.sort((a, b) => getPrice(b) - getPrice(a));
        break;
    }
    if (!sortBy) {
      setProductList(products);
    } else setProductList(sorted);

    setCurrentPage(1);
  };

  return (
    <section>
      <div className="mb-5 flex items-center justify-between">
        {paginatedProducts.length > 0 ? (
          `Showing ${startIndex + 1} - ${Math.min(endIndex, productList.length)} of 
        ${productList.length} products`
        ) : (
          <span></span>
        )}
        <ProductListHeader handleSort={handleSort} />
      </div>
      {paginatedProducts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.uid} product={product} />
            ))}
          </div>

          <div className="flex justify-center gap-2">
            <button
              className="mt-10 rounded border px-4 py-2"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              Previous
            </button>
            <div className="mt-10 flex justify-center gap-2">
              {Array.from({ length: totalPages }, (_, index) => {
                const page = index + 1;

                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={
                      currentPage === page
                        ? "rounded bg-black px-4 py-2 text-white"
                        : "rounded border px-4 py-2"
                    }
                  >
                    {page}
                  </button>
                );
              })}
            </div>
            <button
              className="mt-10 rounded border px-4 py-2"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div className="py-32 text-center">
          <h3 className="text-xl font-semibold">No products found!!</h3>
        </div>
      )}
    </section>
  );
}
