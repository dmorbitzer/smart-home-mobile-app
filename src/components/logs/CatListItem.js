import { ListItem } from "@react-native-material/core";

export default function CatListItem(props) {
  const name = props.data.cat;
  const food = props.data.foodType;
  const type = props.data.type;
  return (
    <ListItem
      key={props.id}
      title={props.name + " " + props.time}
      secondaryText={`Katze: ${name}, Futter: ${food}, Type: ${type}`}
    />
  );
}
