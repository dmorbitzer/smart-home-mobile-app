import { Divider } from "@react-native-material/core";
import { useState } from "react";
import { View } from "react-native";

import LogFilterModal from "./LogFilterModal";
import GetIcon from "../../api/GetIcon";
import IconButton from "../util/IconButton";

export default function Services(props) {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModalHandler = (newServiceFilter, newDateFilter) => {
    props.changeFilter(newServiceFilter, newDateFilter);
    setShowModal(false);
  };
  return (
    <View>
      <Divider leadingInset={16} />
      <IconButton
        title="Filter"
        type="secondary"
        icon={GetIcon("Filter")}
        func={openModal}
      />
      <LogFilterModal
        showModal={showModal}
        closeModalHandler={closeModalHandler}
      />
    </View>
  );
}
