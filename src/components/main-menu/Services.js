import { Box } from "@react-native-material/core";

import getIcon from "../../api/getIcon";
import IconButton from "../util/IconButton";

export default function Services(props) {
  const servicesList = props.data.map((element) => {
    if (element.node.active) {
      return (
        <IconButton
          key={element.node.name}
          title={element.node.name}
          type="primary"
          func={() => props.navigation.navigate(element.node.name)}
          icon={getIcon(element.node.name)}
        />
      );
    }
  });
  servicesList.push(
    <IconButton
      key="Logout"
      title="Logout"
      type="primary"
      func={() => props.navigation.navigate("Login")}
      icon={getIcon("Logout")}
    />
  );
  return <Box h={100}>{servicesList}</Box>;
}
