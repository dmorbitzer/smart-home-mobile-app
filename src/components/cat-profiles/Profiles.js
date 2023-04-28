import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Box, ListItem } from "@react-native-material/core";

const size = 25;

export default function Profiles(props) {
  const profilesList = props.data.map((element) => {
    return (
      <ListItem
        key={element.node.id}
        title={element.node.name}
        leading={<Icon name="cat" size={size} />}
        trailing={() => <Icon name="chevron-right" />}
        onPress={() => {
          props.navigation.navigate("Profildetails", {
            id: element.node.id,
          });
        }}
      />
    );
  });
  return <Box>{profilesList}</Box>;
}
