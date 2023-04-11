import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Constants from "expo-constants";

import MainMenuPage from "./landing-page/MainMenuPage";
import CatDetection from "./services-views/cat-detection/CatDetection";
import CatFeeding from "./services-views/cat-feeding/CatFeeding";
import CatProfiles from "./services-views/cat-profiles/CatProfiles";

export default function App() {
  let apiUrl;
  try {
    apiUrl = Constants.expoConfig.extra.apiUrl;
  } catch (error) {
    console.error(error);
    apiUrl = "test-url.com";
  }
  console.log(apiUrl);
  const Stack = createNativeStackNavigator();
  const cache = new InMemoryCache();
  const client = new ApolloClient({
    uri: `http://${apiUrl}:8080/api/graphql`,
    cache,
    defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
  });

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerStyle: { backgroundColor: "lightblue" } }}
          initialRouteName="LandingPage"
        >
          <Stack.Screen
            name="LandingPage"
            component={MainMenuPage}
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
