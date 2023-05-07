import { Text, Box, Divider } from "@react-native-material/core";
import { useState } from "react";

import CatFeedingManual from "./CatFeedingManual";
import DetailsWeekOverview from "./DetailsWeekOverview";
import FeedingTimeHeader from "./FeedingTimeHeader";
import FeedingTimeList from "./FeedingTimeList";
import DeleteFeedingTimeModal from "./cat-feeding-modals/DeleteFeedingTimeModal";

export default function Details(props) {
  const [showModal, setShowModal] = useState(false);
  const [toDeleteFeedingTimeId, setToDeleteFeedingTimeId] = useState(null);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModalHandler = () => {
    setShowModal(false);
  };
  const feedingTimeLongClick = (feedingTimeId) => {
    setToDeleteFeedingTimeId(feedingTimeId);
    openModal();
  };
  return (
    <>
      <Box style={{ alignSelf: "center" }}>
        <Text variant="h1">{props.catName}</Text>
      </Box>
      <Divider style={{ margin: 20 }} />
      <CatFeedingManual
        onFeedNowClick={props.onFeedNowClick}
        feedingTimesData={props.feedingTimesData}
        foodData={props.foodData}
        navigation={props.navigation}
        catId={props.catId}
      />
      <Divider style={{ margin: 20 }} />
      <DetailsWeekOverview
        weekDay={props.weekDay}
        setWeekDay={props.setWeekDay}
      />
      <Divider style={{ margin: 20 }} />
      <FeedingTimeHeader
        navigation={props.navigation}
        weekDay={props.weekDay}
        catId={props.catId}
        catName={props.catName}
        foodData={props.foodData}
      />
      <Divider style={{ margin: 20 }} />
      <FeedingTimeList
        feedingTimeLongClick={feedingTimeLongClick}
        weekDay={props.weekDay}
        feedingTimesData={props.feedingTimesData}
        catName={props.catName}
        catId={props.catId}
      />
      <DeleteFeedingTimeModal
        deleteFeedingTime={props.deleteFeedingTime}
        feedingTimeId={toDeleteFeedingTimeId}
        showModal={showModal}
        closeModalHandler={closeModalHandler}
      />
    </>
  );
}
