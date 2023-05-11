import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function getIcon(title) {
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
    case "Speichern":
      return () => <Icon name="content-save" color="black" size={size} />;
    case "Food":
      return () => (
        <Icon name="silverware-fork-knife" color="black" size={size} />
      );
    case "Logout":
      return () => <Icon name="logout" color="black" size={size} />;
    case "Login":
      return () => <Icon name="login" color="black" size={size} />;
    case "Time":
      return () => <Icon name="clock-time-eight" color="black" size={size} />;
    default:
      return "";
  }
}
