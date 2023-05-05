import { Stack } from "@react-native-material/core";
import { useEffect, useState } from "react";
import { BackHandler } from "react-native";

import useLogin from "../api/useLogin";
import LoginForm from "../components/login/LoginForm";

export default function ({ navigation }) {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        return true;
      }
    );

    return () => backHandler.remove();
  }, []);

  const [hasError, setHasError] = useState(false);
  const login = useLogin();

  const handleLogin = async (username, password) => {
    const response = await login(global.apiUrl, username, password);
    if (!response.ok) {
      setHasError(true);
    } else {
      setHasError(false);
      const body = await response.json();
      global.jwt = body.token;
      navigation.navigate("LandingPage");
    }
  };
  return (
    <Stack m={4} spacing={2}>
      <LoginForm handleLogin={handleLogin} hasError={hasError} />
    </Stack>
  );
}
