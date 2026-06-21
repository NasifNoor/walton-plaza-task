import ProductCard from "@/components/product-list/ProductCard";
import ProductList from "@/components/product-list/ProductList";
import ProductListHeader from "@/components/product-list/ProductListHeader";
import SideBar from "@/components/product-list/SideBar";
import { GET_PRODUCTS } from "@/graphql/queries/getProducts";
import { client } from "@/lib/apollo/client";
import { GetProductsResponse } from "@/types/product";

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
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <SideBar />
      <ProductList products={products} />
    </div>
  );
}
