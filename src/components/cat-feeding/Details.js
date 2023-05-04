import { Text, Box, Divider } from "@react-native-material/core";
import { useState } from "react";

import ChooseFoodModal from "./food-modal/ChooseFoodModal";
import GetIcon from "../../api/GetIcon";
import IconButton from "../util/IconButton";

export default function Details(props) {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const CloseModalHandler = (selectedFood) => {
    if (selectedFood) {
      const catId = props.feedintTimesData.cat.id.replace("/api/cats/", "");
      const foodId = selectedFood.replace("/api/food/", "");
      props.onFeedNowClick(catId, foodId);
    }
    setShowModal(false);
  };
  return (
    <>
      <Box style={{ alignSelf: "center" }}>
        <Text variant="h1">{props.feedintTimesData.cat.name}</Text>
      </Box>
      <Divider style={{ margin: 20 }} />
      <IconButton
        key={1}
        customMargin={1}
        title="Jetzt füttern"
        type="primary"
        func={() => {
          openModal();
        }}
        icon={GetIcon("Food")}
      />
      <Divider style={{ margin: 20 }} />
      <ChooseFoodModal
        foodData={props.foodData}
        navigation={props.navigation}
        showModal={showModal}
        closeModalHandler={CloseModalHandler}
      />
    </>
  );
}
