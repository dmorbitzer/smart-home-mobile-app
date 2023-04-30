import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Text,
  Box,
  Divider,
  IconButton,
  HStack,
} from "@react-native-material/core";
import { useState } from "react";

import DetailsTable from "./DetailsTable";
import DeleteCatModal from "./delete-modal/DeleteCatModal";

export default function Details(props) {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModalHandler = () => {
    setShowModal(false);
  };
  return (
    <>
      <Box style={{ alignSelf: "center" }}>
        <Text variant="h1">{props.data.cat.name}</Text>
      </Box>
      <Divider style={{ margin: 20 }} />
      <DetailsTable data={props.data} />
      <Divider style={{ margin: 20 }} />
      <HStack fill center spacing={40}>
        <IconButton
          icon={() => (
            <Icon color="black" size={40} name="silverware-fork-knife" />
          )}
          onTouchStart={() => {
            props.navigation.navigate("Katzenfütterung", {
              id: props.data.cat.id,
            });
          }}
        />
        <IconButton
          onTouchStart={() => openModal()}
          icon={() => <Icon color="darkred" size={40} name="trash-can" />}
        />
      </HStack>
      <DeleteCatModal
        navigation={props.navigation}
        delteCat={props.delteCat}
        delteId={props.data.cat.id}
        showModal={showModal}
        closeModalHandler={closeModalHandler}
      />
    </>
  );
}
