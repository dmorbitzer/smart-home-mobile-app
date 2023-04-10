import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Constants from "expo-constants";

import LandingPage from "./landing-page/LandingPage";

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: "http://192.168.0.68:8080/api/graphql",
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
});
export default function App() {
  let apiUrl;
  try {
    apiUrl = Constants.expoConfig.extra.apiUrl;
  } catch (error) {
    apiUrl = "test-url.com";
  }
  console.log(apiUrl);

  return (
    <ApolloProvider client={client}>
      <LandingPage />
    </ApolloProvider>
  );
}
