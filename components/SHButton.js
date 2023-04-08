import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Button, Box } from "@react-native-material/core";

export default function SHButton(props) {
  const size = 20;
  return (
    <Box mt={10} mb={10} ml={20} mr={20}>
      <Button
        title={props.title}
        color="lightblue"
        leading={() => <Icon name={props.icon} color="black" size={size} />}
        onTouchStart={() => {
          props.func();
        }}
      />
    </Box>
  );
}
