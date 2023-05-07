import { Stack } from "@react-native-material/core";
import { useEffect, useState } from "react";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";
import Toast from "react-native-root-toast";

import { useDeleteFeedingTime, useGetFeedingTimes } from "../api/FeedingTimes";
import { useGetFood } from "../api/Food";
import useFeedNow from "../api/useFeedNow";
import Details from "../components/cat-feeding/Details";
import Loading from "../components/util/Loading";

export default function CatFeedingDetails({ route, navigation }) {
  const [weekDay, setWeekDay] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const getFeedingTimes = useGetFeedingTimes();
  const getFood = useGetFood();
  const feedCat = useFeedNow();
  const deleteFeedingTime = useDeleteFeedingTime();

  useEffect(() => {
    if (route.params.weekDay) {
      setWeekDay(route.params.weekDay);
      route.params.weekDay = null;
      onRefresh();
    } else if (!weekDay) {
      const weekdayNumber = [7, 1, 2, 3, 4, 5, 6];
      const curDay = new Date();
      setWeekDay(weekdayNumber[curDay.getDay()]);
    }
  });
  const onDeleteFeedingTime = (feedingTimeId) => {
    deleteFeedingTime(feedingTimeId).then(() => {
      Toast.show("Fütterungszeit wurde gelöscht!", {
        duration: Toast.durations.LONG,
      });
      onRefresh();
    });
  };
  const onFeedNowClick = (catId, foodId) => {
    const feedCatFeedback = feedCat(global.apiUrl, catId, foodId);
    if (!feedCatFeedback.error && !feedCatFeedback.loading) {
      Toast.show("Katze wird gefüttert!", {
        duration: Toast.durations.LONG,
      });
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    getFeedingTimes.refetch();
    setRefreshing(false);
  };

  if (getFeedingTimes.loading || getFood.loading) {
    return <Loading />;
  }
  return (
    <Stack m={4} spacing={2}>
      <ScrollView
        style={styles.catFeedingDetails}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Details
          deleteFeedingTime={onDeleteFeedingTime}
          catName={route.params.name}
          catId={route.params.catId}
          foodData={getFood.data.food.edges}
          feedingTimesData={getFeedingTimes.data.feedingTimes.edges}
          onFeedNowClick={onFeedNowClick}
          navigation={navigation}
          weekDay={weekDay}
          setWeekDay={setWeekDay}
        />
      </ScrollView>
    </Stack>
  );
}

const styles = StyleSheet.create({
  catFeedingDetails: {
    height: "100%",
  },
});
