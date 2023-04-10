import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Constants from "expo-constants";

import LandingPage from "./landing-page/LandingPage";
import CatDetection from "./services-views/cat-detection/CatDetection";
import CatFeeding from "./services-views/cat-feeding/CatFeeding";
import CatProfiles from "./services-views/cat-profiles/CatProfiles";

const Stack = createNativeStackNavigator();
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
    apiUrl = error.toString();
  }
  console.log(apiUrl);

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={LandingPage}
            options={{ title: "Main Menu" }}
          />
          <Stack.Screen name="Katzenprofil" component={CatProfiles} />
          <Stack.Screen name="Katzenfütterung" component={CatFeeding} />
          <Stack.Screen name="Katzenerkennung" component={CatDetection} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
