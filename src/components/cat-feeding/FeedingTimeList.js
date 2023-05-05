import { Text, Box, ListItem } from "@react-native-material/core";

export default function FeedingTimeList(props) {
  const feedingList = props.feedingTimesData.map((element) => {
    if (
      element.node.cat.id === props.catId &&
      element.node.weekDay === props.weekDay
    ) {
      return (
        <ListItem
          key={element.node.id}
          title={element.node.time}
          secondaryText={element.node.food.name}
          leading={<Text>{element.node.weekDay}</Text>}
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
