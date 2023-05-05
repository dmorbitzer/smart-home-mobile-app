import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { IconButton, HStack } from "@react-native-material/core";
import { useState } from "react";

export default function DetailsWeekOverview(props) {
  const [mondayIcon, setMondayIcon] = useState("alpha-m");
  const [tuesdayIcon, setTuesdayIcon] = useState("alpha-d");
  const [wednesdayIcon, setWednesdayIcon] = useState("alpha-m");
  const [thursdayIcon, setThursdayIcon] = useState("alpha-d");
  const [fridayIcon, setFridayIcon] = useState("alpha-f");
  const [saturdayIcon, setSaturdayIcon] = useState("alpha-s");
  const [sundayIcon, setSundayIcon] = useState("alpha-s");

  const unSet = () => {
    setMondayIcon("alpha-m");
    setTuesdayIcon("alpha-d");
    setWednesdayIcon("alpha-m");
    setThursdayIcon("alpha-d");
    setFridayIcon("alpha-f");
    setSaturdayIcon("alpha-s");
    setSundayIcon("alpha-s");
  };

  return (
    <>
      <HStack fill center spacing={3}>
        <IconButton
          onTouchStart={() => {
            props.setWeekDay(1);
            unSet();
            setMondayIcon("alpha-m-circle-outline");
          }}
          icon={() => <Icon color="lightblue" size={30} name={mondayIcon} />}
        />
        <IconButton
          onTouchStart={() => {
            props.setWeekDay(2);
            unSet();
            setTuesdayIcon("alpha-d-circle-outline");
          }}
          icon={() => <Icon color="lightblue" size={30} name={tuesdayIcon} />}
        />
        <IconButton
          onTouchStart={() => {
            props.setWeekDay(3);
            unSet();
            setWednesdayIcon("alpha-m-circle-outline");
          }}
          icon={() => <Icon color="lightblue" size={30} name={wednesdayIcon} />}
        />
        <IconButton
          onTouchStart={() => {
            props.setWeekDay(4);
            unSet();
            setThursdayIcon("alpha-d-circle-outline");
          }}
          icon={() => <Icon color="lightblue" size={30} name={thursdayIcon} />}
        />
        <IconButton
          onTouchStart={() => {
            props.setWeekDay(5);
            unSet();
            setFridayIcon("alpha-f-circle-outline");
          }}
          icon={() => <Icon color="lightblue" size={30} name={fridayIcon} />}
        />
        <IconButton
          onTouchStart={() => {
            props.setWeekDay(6);
            unSet();
            setSaturdayIcon("alpha-s-circle-outline");
          }}
          icon={() => <Icon color="lightblue" size={30} name={saturdayIcon} />}
        />
        <IconButton
          onTouchStart={() => {
            props.setWeekDay(7);
            unSet();
            setSundayIcon("alpha-s-circle-outline");
          }}
          icon={() => <Icon color="lightblue" size={30} name={sundayIcon} />}
        />
      </HStack>
    </>
  );
}
