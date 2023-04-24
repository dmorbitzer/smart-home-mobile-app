import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Box, ListItem } from "@react-native-material/core";

const profilesList = [];
const size = 25;

export default function Profiles(props) {
  for (let i = 0; i < props.data.cats.edges.length; i++) {
    profilesList.push(
      <ListItem
        key={props.data.cats.edges[i].node.id}
        title={props.data.cats.edges[i].node.name}
        leading={<Icon name="cat" size={size} />}
        trailing={() => <Icon name="chevron-right" />}
        onTouchStart={() => {
          console.log("TEST");
        }}
        //props.navigation.navigate("Katzendetailansicht", {
        //  name: props.data.cats.edges[i].node.name,
        //})
      />
    );
  }
  return <Box>{profilesList}</Box>;
}
