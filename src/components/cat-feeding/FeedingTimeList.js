import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Text, Box, ListItem } from "@react-native-material/core";

export default function FeedingTimeList(props) {
  const sortedFeedingTimeData = props.feedingTimesData
    .slice()
    .sort((a, b) =>
      a.node.time > b.node.time ? 1 : b.node.time > a.node.time ? -1 : 0
    );
  const feedingList = sortedFeedingTimeData.map((element) => {
    if (
      element.node.cat.id === props.catId &&
      element.node.weekDay === props.weekDay
    ) {
      const time = element.node.time
        .replace("1970-01-01T", "")
        .replace("+01:00", "")
        .slice(0, -3);
      return (
        <ListItem
          key={element.node.id}
          title={time}
          secondaryText={element.node.food.name}
          leading={
            <Icon name="silverware-fork-knife" color="black" size={25} />
          }
          onLongPress={() => {
            props.feedingTimeLongClick(element.node.id);
          }}
        />
      );
    }
  });
  const isUndefined = (currentValue) => currentValue === undefined;
  if (feedingList.every(isUndefined)) {
    const message = props.weekDay
      ? "Keine Fütterungen an diesem Wochentag!"
      : "Bitte zuerst einen Wochentag wählen!";
    return (
      <Text style={{ alignSelf: "center", marginTop: 15 }}>{message}</Text>
    );
  }
  return <Box>{feedingList}</Box>;
}
