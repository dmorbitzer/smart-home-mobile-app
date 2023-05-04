import { Text, Box, Divider } from "@react-native-material/core";

import CatFeedingManual from "./CatFeedingManual";

export default function Details(props) {
  return (
    <>
      <Box style={{ alignSelf: "center" }}>
        <Text variant="h1">{props.feedingTimesData.cat.name}</Text>
      </Box>
      <Divider style={{ margin: 20 }} />
      <CatFeedingManual
        onFeedNowClick={props.onFeedNowClick}
        feedingTimesData={props.feedingTimesData}
        foodData={props.foodData}
        navigation={props.navigation}
      />
      <Divider style={{ margin: 20 }} />
    </>
  );
}
