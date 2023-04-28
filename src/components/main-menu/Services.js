import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Box } from "@react-native-material/core";

import IconButton from "../util/IconButton";

const size = 25;
const getIcon = (title) => {
  switch (title) {
    case "Katzenprofil":
      return () => <Icon name="cat" color="black" size={size} />;
    case "Katzenfütterung":
      return () => <Icon name="food" color="black" size={size} />;
    case "Katzenerkennung":
      return () => (
        <Icon name="smoke-detector-variant" color="black" size={size} />
      );
    default:
      return "";
  }
};

export default function Services(props) {
  const servicesList = props.data.map((element) => {
    if (element.node.active) {
      return (
        <IconButton
          key={element.node.name}
          title={element.node.name}
          type="primary"
          icon={getIcon(element.node.name)}
          func={() => props.navigation.navigate(element.node.name)}
        />
      );
    }
  });
  return <Box h={100}>{servicesList}</Box>;
}
