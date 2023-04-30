import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Box, ListItem } from "@react-native-material/core";

const size = 25;

export default function Profiles(props) {
  const navigateToScreen = (event, element) => {
    const screen =
      props.type === "profile"
        ? "Katzendetailansicht"
        : props.type === "feed"
        ? "Fütterung"
        : "";
    props.navigation.navigate(screen, {
      name: element.node.name,
      catId: element.node.id,
    });
  };
  const profilesList = props.data.map((element) => {
    return (
      <ListItem
        key={element.node.id}
        title={element.node.name}
        leading={<Icon name="cat" size={size} />}
        trailing={() => <Icon name="chevron-right" />}
        onPress={(event) => {
          navigateToScreen(event, element);
        }}
      />
    );
  });
  return <Box>{profilesList}</Box>;
}
