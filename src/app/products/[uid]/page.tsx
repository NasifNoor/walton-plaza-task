import { GET_PRODUCT_DETAILS } from "@/graphql/queries/getProductDetails";
import { client } from "@/lib/apollo/client";
import { FormattedAttribute, GetProductsResponse } from "@/types/product";
import BasicDetails from "@/components/product/BasicDetails";
import ProductDetailsImage from "@/components/product/ProductDetailsImage";
import ProductDetails from "@/components/product/ProductDetails";
import { notFound } from "next/navigation";
interface PageProps {
  params: Promise<{
    uid: string;
  }>;
}

export default async function ProductDetailsPage({ params }: PageProps) {
  const { uid } = await params;

  const { data } = await client.query<GetProductsResponse>({
    query: GET_PRODUCT_DETAILS,
    variables: {
      uid,
    },
  });

  const product = data?.getProducts?.result?.products[0];

  if (!product) {
    notFound();
  }

  const image = product?.images[0]?.url || "/placeholder-product.jpg";

  const formattedAttributes: FormattedAttribute[] | undefined =
    product?.productAttributes
      ?.filter((item) => item?.values?.length > 0)
      .map((item) => ({
        name: item?.enLabel,
        value: item?.values.map((v) => v.enName).join(", "),
      }));

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid gap-10 lg:grid-cols-2">
        <ProductDetailsImage
          productImages={
            product?.images || [{ url: "/placeholder-product.jpg" }]
          }
          alt={product?.enName}
        />

        {product && <ProductDetails product={product} />}
      </div>
      {formattedAttributes && <BasicDetails data={formattedAttributes} />}
    </main>
  );
}
