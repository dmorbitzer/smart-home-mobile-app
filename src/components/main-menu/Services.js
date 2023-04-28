import { Box } from "@react-native-material/core";

import GetIcon from "../../api/GetIcon";
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
          icon={GetIcon(element.node.name)}
        />
      );
    }
  });
  return <Box h={100}>{servicesList}</Box>;
}
