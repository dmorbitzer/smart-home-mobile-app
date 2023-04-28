import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function GetIcon(title) {
  const size = 25;
  switch (title) {
    case "Katzenprofil":
      return () => <Icon name="cat" color="black" size={size} />;
    case "Katzenfütterung":
      return () => <Icon name="food" color="black" size={size} />;
    case "Katzenerkennung":
      return () => (
        <Icon name="smoke-detector-variant" color="black" size={size} />
      );
    case "Logbuch":
      return () => (
        <Icon name="format-list-bulleted-square" color="black" size={size} />
      );
    case "Filter":
      return () => <Icon name="filter" color="black" size={size} />;
    default:
      return "";
  }
}
