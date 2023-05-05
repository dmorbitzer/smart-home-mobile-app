import { Text } from "@react-native-material/core";
import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { HelperText } from "react-native-paper";

import Error from "./Error";
import getIcon from "../../api/getIcon";
import IconButton from "../util/IconButton";

export default function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hasUsernameError, setUsernameError] = useState(false);
  const [hasPasswordError, setPasswordError] = useState(false);

  const onLogin = () => {
    console.log(username.length === 0);
    setUsernameError(username.length === 0);
    setPasswordError(password.length === 0);

    console.log(hasUsernameError);

    if (username.length === 0 || password.length === 0) {
      return;
    }

    props.handleLogin(username, password);
  };
  return (
    <View style={styles.formView}>
      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        editable
        value={username}
        onChangeText={setUsername}
        username
      />
      <HelperText type="error" visible={hasUsernameError}>
        Username fehlt!
      </HelperText>
      <Text style={styles.label}>Passwort:</Text>
      <TextInput
        style={styles.input}
        editable
        value={password}
        onChangeText={setPassword}
        current-password
        password
        secureTextEntry
      />
      <HelperText type="error" visible={hasPasswordError}>
        Passwort fehlt!
      </HelperText>
      <Error hasError={props.hasError} />
      <IconButton
        type="primary"
        title="Login"
        icon={getIcon("Login")}
        func={onLogin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginLeft: 12,
    marginTop: 12,
    marginBottom: 0,
    borderWidth: 1,
    padding: 10,
    fontSize: 25,
  },
  formView: {
    margin: 10,
  },
  label: {
    marginLeft: 12,
  },
});
