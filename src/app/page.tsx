import { client } from "@/lib/apollo/client";
import { GET_PRODUCTS } from "@/graphql/queries/getProducts";
import { GetProductsResponse } from "@/types/product";
import { redirect } from "next/navigation";

export default async function HomePage() {
  redirect("/products");
}
