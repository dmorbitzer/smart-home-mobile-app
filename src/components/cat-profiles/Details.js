import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Text,
  Box,
  Divider,
  IconButton,
  HStack,
  VStack,
} from "@react-native-material/core";
import { useState } from "react";

import DeleteCatAskModal from "./DeleteCatAskModal";

export default function Details(props) {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModalHandler = (choose) => {
    setShowModal(false);
    if (choose) {
      props.navigation.navigate("Katzenprofil", {
        id: props.data.cat.id,
      });
    }
  };
  const date = new Date(props.data.cat.birthdate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const localBirthdate = day + "." + month + "." + year;
  const localGender =
    props.data.cat.gender.name === "male" ? "Männlich" : "Weiblich";
  return (
    <>
      <Box style={{ alignSelf: "center" }}>
        <Text variant="h1">{props.data.cat.name}</Text>
      </Box>
      <Divider style={{ margin: 20 }} />
      <HStack>
        <VStack fill center spacing={4} divider>
          <Text variant="h6">Geschlecht</Text>
          <Text variant="h6">Rasse</Text>
          <Text variant="h6">Geburtstag</Text>
          <Text variant="h6">Gewicht</Text>
        </VStack>
        <VStack fill center spacing={4} divider>
          <Text variant="h6">{localGender}</Text>
          <Text variant="h6">{props.data.cat.race}</Text>
          <Text variant="h6">{localBirthdate}</Text>
          <Text variant="h6">{props.data.cat.weight} kg</Text>
        </VStack>
      </HStack>
      <Divider style={{ margin: 20 }} />
      <HStack fill center spacing={40}>
        <IconButton
          icon={() => <Icon color="black" size={40} name="timer" />}
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
      <DeleteCatAskModal
        showModal={showModal}
        closeModalHandler={closeModalHandler}
      />
    </>
  );
}
