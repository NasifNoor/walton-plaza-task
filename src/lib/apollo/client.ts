import { ApolloClient, InMemoryCache } from "@apollo/client/core";

import { HttpLink } from "@apollo/client/link/http";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  }),
  cache: new InMemoryCache(),
});
