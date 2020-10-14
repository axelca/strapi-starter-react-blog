import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const cache = new InMemoryCache();
const link = new HttpLink({
  // hårdkokt
  uri: `https://intense-garden-57316.herokuapp.com/graphql`,
});
const client = new ApolloClient({
  cache,
  link
});

export default client;
