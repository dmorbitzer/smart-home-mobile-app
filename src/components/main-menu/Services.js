import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Box } from "@react-native-material/core";

import IconButton from "../util/IconButton";

const servicesList = [];
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
  for (let i = 0; i < props.data.services.edges.length; i++) {
    if (props.data.services.edges[i].node.active) {
      servicesList.push(
        <IconButton
          key={props.data.services.edges[i].node.name}
          title={props.data.services.edges[i].node.name}
          type="primary"
          icon={getIcon(props.data.services.edges[i].node.name)}
          func={() =>
            props.navigation.navigate(props.data.services.edges[i].node.name)
          }
        />
      );
    }
  }
  return <Box h={100}>{servicesList}</Box>;
}
