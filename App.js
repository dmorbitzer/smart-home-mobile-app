import Constants from "expo-constants";

import LandingPage from "./landing-page/LandingPage";

export default function App() {
  let apiUrl;
  try {
    apiUrl = Constants.expoConfig.extra.apiUrl;
  } catch (error) {
    apiUrl = "test-url.com";
  }
  console.log(apiUrl);

  return <LandingPage />;
}
