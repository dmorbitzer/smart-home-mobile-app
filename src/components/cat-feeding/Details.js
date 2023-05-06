import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Text,
  Box,
  Divider,
  HStack,
  IconButton as MuiIconButton,
  Spacer,
} from "@react-native-material/core";
import { useState } from "react";
import Toast from "react-native-root-toast";

import CatFeedingManual from "./CatFeedingManual";
import DetailsWeekOverview from "./DetailsWeekOverview";
import FeedingTimeList from "./FeedingTimeList";
import DeleteFeedingTimeModal from "./delete-modal/DeleteFeedingTimeModal";

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
      />
      <Divider style={{ margin: 20 }} />
      <DetailsWeekOverview
        weekDay={props.weekDay}
        setWeekDay={props.setWeekDay}
      />
      <Divider style={{ margin: 20 }} />
      <HStack>
        <Text style={{ marginLeft: 20, marginTop: 11 }} variant="h5">
          Fütterungszeiten
        </Text>
        <Spacer />
        <MuiIconButton
          onTouchStart={() => {
            if (props.weekDay) {
              props.navigation.navigate("NewFeedingTime", {
                weekDay: props.weekDay,
                catName: props.catName,
                catId: props.catId,
                foodData: props.foodData,
              });
            } else {
              Toast.show("Bitte zuerst einen Wochentag wählen!", {
                duration: Toast.durations.SHORT,
              });
            }
          }}
          icon={() => <Icon size={20} name="plus" />}
        />
      </HStack>
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
