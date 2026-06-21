export interface FormattedAttribute {
  name: string;
  value: string;
}
interface ProductValue {
  enName: string;
}

interface ProductAttribute {
  enLabel: string;
  values: ProductValue[];
}

interface Discount {
  amount: number;
  value: number;
  type: "flat" | "percentage";
}

interface Variant {
  mrpPrice: number;
  quantity: number;
  discount?: Discount | null;
}
export interface Product {
  uid: string;
  enName: string;
  images: {
    url: string;
  }[];
  variants?: Variant[] | null;
  productAttributes?: ProductAttribute[] | null;
}

export interface GetProductsResponse {
  getProducts: {
    statusCode: number;
    message?: string;
    result: {
      products: Product[];
    };
  };
}

export interface GetProductsQuery {
  getProducts: {
    statusCode: number;
    message: string;
    result: {
      count: number;
      products: Product[];
    };
  };
}
