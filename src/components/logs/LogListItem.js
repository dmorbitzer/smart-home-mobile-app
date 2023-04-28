import { ListItem } from "@react-native-material/core";

export default function LogListItem(props) {
  const getSecondaryText = (service) => {
    const name = props.data.cat;
    if (service === "cat_feeding") {
      const food = props.data.foodType;
      const type = props.data.type;
      return `Katze: ${name}, Futter: ${food}, Type: ${type}`;
    } else {
      return `Katze: ${name}`;
    }
  };

  return (
    <ListItem
      key={props.id}
      title={props.name + " " + props.time}
      secondaryText={getSecondaryText(props.serviceType)}
    />
  );
}
