import { useState } from "react";

import ChooseFoodModal from "./cat-feeding-modals/ChooseFoodModal";
import getIcon from "../../api/getIcon";
import IconButton from "../util/IconButton";

export default function CatFeedingManual(props) {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModalHandler = (selectedFood) => {
    if (selectedFood) {
      const catId = props.catId.replace("/api/cats/", "");
      const foodId = selectedFood.replace("/api/food/", "");
      props.onFeedNowClick(catId, foodId);
    }
    setShowModal(false);
  };
  return (
    <>
      <IconButton
        key={1}
        customMargin={1}
        title="Jetzt füttern"
        type="primary"
        func={() => {
          openModal();
        }}
        icon={getIcon("Food")}
      />
      <ChooseFoodModal
        foodData={props.foodData}
        navigation={props.navigation}
        showModal={showModal}
        closeModalHandler={closeModalHandler}
      />
    </>
  );
}
