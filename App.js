import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Constants from "expo-constants";

import CatDetection from "./src/screens/CatDetection";
import CatFeeding from "./src/screens/CatFeeding";
import CatProfiles from "./src/screens/CatProfiles";
import MainMenu from "./src/screens/MainMenu";

export default function App() {
  let apiUrl;
  if (Constants.expoConfig.extra.apiUrl) {
    apiUrl = Constants.expoConfig.extra.apiUrl;
  } else {
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
            component={MainMenu}
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
