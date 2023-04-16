import { Text, Box } from "@react-native-material/core";
import { ActivityIndicator } from "react-native";

export default function Loading() {
  return (
    <Box style={{ alignSelf: "center", marginTop: 40 }}>
      <ActivityIndicator size="large" />
      <Box m={10}>
        <Text variant="h6">Loading</Text>
      </Box>
    </Box>
  );
}
