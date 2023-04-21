import GetIcon from "../../api/GetIcon";
import { Box } from "@react-native-material/core";

import IconButton from "../util/IconButton";

const servicesList = [];

export default function Services(props) {
  for (let i = 0; i < props.data.services.edges.length; i++) {
    if (props.data.services.edges[i].node.active) {
      servicesList.push(
        <IconButton
          key={props.data.services.edges[i].node.name}
          title={props.data.services.edges[i].node.name}
          type="primary"
          icon={GetIcon(props.data.services.edges[i].node.name)}
          func={() =>
            props.navigation.navigate(props.data.services.edges[i].node.name)
          }
        />
      );
    }
  }
  return <Box h={100}>{servicesList}</Box>;
}
