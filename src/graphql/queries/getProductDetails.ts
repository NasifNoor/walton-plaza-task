import { gql } from "@apollo/client";

export const GET_PRODUCT_DETAILS = gql`
  query GetProductDetails($uid: String!) {
    getProducts(filter: { uid: $uid }) {
      statusCode
      result {
        products {
          uid
          enName
          images {
            url
          }
          variants {
            mrpPrice
            quantity
            discount {
              amount
              value
              type
            }
          }
          productAttributes {
            enLabel
            values {
              enName
            }
          }
        }
      }
    }
  }
`;
