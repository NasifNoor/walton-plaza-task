import ProductList from "@/components/product-list/ProductList";
import ProductListingPageSkeleton from "@/components/product-list/ProductListingPageSkeleton";
import SideBar from "@/components/product-list/SideBar";
import { GET_PRODUCTS } from "@/graphql/queries/getProducts";
import { client } from "@/lib/apollo/client";
import { GetProductsResponse } from "@/types/product";
import { Suspense } from "react";

export default async function ProductsPage() {
  const { data } = await client.query<GetProductsResponse>({
    query: GET_PRODUCTS,
    variables: {
      skip: 0,
      limit: 100,
    },
  });

  const products = data?.getProducts?.result?.products ?? [];

  return (
    <Suspense fallback={<ProductListingPageSkeleton />}>
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <SideBar />
        <ProductList products={products} />
      </div>
    </Suspense>
  );
}
