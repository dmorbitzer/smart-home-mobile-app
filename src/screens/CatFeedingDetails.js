import { Stack } from "@react-native-material/core";
import { useState } from "react";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";
import Toast from "react-native-root-toast";

import { useGetFeedingTimes } from "../api/FeedingTimes";
import { useGetFood } from "../api/Food";
import useFeedNow from "../api/useFeedNow";
import Details from "../components/cat-feeding/Details";
import Loading from "../components/util/Loading";

export default function CatFeedingDetails({ route, navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const getFeedingTimes = useGetFeedingTimes();
  const getFood = useGetFood();
  const feedCat = useFeedNow();

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
  for (let i = 0; i < getFeedingTimes.data.feedingTimes.edges.length; i++) {
    if (
      getFeedingTimes.data.feedingTimes.edges[i].node.cat.id ===
      route.params.catId
    ) {
      return (
        <Stack m={4} spacing={2}>
          <ScrollView
            style={styles.catFeedingDetails}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            <Details
              foodData={getFood.data.food.edges}
              feedingTimesData={getFeedingTimes.data.feedingTimes.edges[i].node}
              onFeedNowClick={onFeedNowClick}
              navigation={navigation}
            />
          </ScrollView>
        </Stack>
      );
    }
  }
}

const styles = StyleSheet.create({
  catFeedingDetails: {
    height: "100%",
  },
});
