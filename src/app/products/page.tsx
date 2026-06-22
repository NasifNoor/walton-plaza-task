import ProductListingPage from "@/components/product-list/ProductListingPage";
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

  return <ProductListingPage products={products} />;
}
