import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { IconButton } from "@react-native-material/core";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Constants from "expo-constants";

import AddCat from "./src/screens/AddCat";
import CatDetails from "./src/screens/CatDetails";
import CatDetection from "./src/screens/CatDetection";
import CatFeeding from "./src/screens/CatFeeding";
import CatFeedingDetails from "./src/screens/CatFeedingDetails";
import CatProfiles from "./src/screens/CatProfiles";
import EditCat from "./src/screens/EditCat";
import Logs from "./src/screens/Logs";
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
          <Stack.Screen
            name="Katzenprofil"
            component={CatProfiles}
            options={({ navigation }) => ({
              headerRight: () => (
                <IconButton
                  onPress={() => navigation.navigate("Hinzufügen")}
                  icon={() => <Icon name="plus-circle" size={25} />}
                />
              ),
            })}
          />
          <Stack.Screen name="Katzenfütterung" component={CatFeeding} />
          <Stack.Screen name="Katzenerkennung" component={CatDetection} />
          <Stack.Screen name="Katzenbearbeitung" component={EditCat} />
          <Stack.Screen name="Logbuch" component={Logs} />
          <Stack.Screen
            name="Profildetails"
            component={CatDetails}
            options={({ route, navigation }) => ({
              headerRight: () => (
                <IconButton
                  onPress={() =>
                    navigation.navigate("Katzenbearbeitung", {
                      id: route.params.id,
                    })
                  }
                  icon={() => <Icon name="border-color" size={25} />}
                />
              ),
            })}
          />
          <Stack.Screen name="Hinzufügen" component={AddCat} />
          <Stack.Screen name="Fütterung" component={CatFeedingDetails} />
          <Stack.Screen name="Katzendetailansicht" component={CatDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
