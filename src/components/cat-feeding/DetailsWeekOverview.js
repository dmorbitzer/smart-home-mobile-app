import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { IconButton, HStack } from "@react-native-material/core";
import { useEffect, useState } from "react";

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

  const set = (weekDay) => {
    props.setWeekDay(weekDay);
    unSet();
    switch (weekDay) {
      case 1:
        setMondayIcon("alpha-m-circle-outline");
        return;
      case 2:
        setTuesdayIcon("alpha-d-circle-outline");
        return;
      case 3:
        setWednesdayIcon("alpha-m-circle-outline");
        return;
      case 4:
        setThursdayIcon("alpha-d-circle-outline");
        return;
      case 5:
        setFridayIcon("alpha-f-circle-outline");
        return;
      case 6:
        setSaturdayIcon("alpha-s-circle-outline");
        return;
      case 7:
        setSundayIcon("alpha-s-circle-outline");
        return;
      default:
        unSet();
    }
  };
  useEffect(() => {
    if (props.weekDay) {
      set(props.weekDay);
    }
  });
  return (
    <>
      <HStack fill center spacing={3}>
        <IconButton
          onTouchStart={() => {
            set(1);
          }}
          icon={() => <Icon color="lightblue" size={30} name={mondayIcon} />}
        />
        <IconButton
          onTouchStart={() => {
            set(2);
          }}
          icon={() => <Icon color="lightblue" size={30} name={tuesdayIcon} />}
        />
        <IconButton
          onTouchStart={() => {
            set(3);
          }}
          icon={() => <Icon color="lightblue" size={30} name={wednesdayIcon} />}
        />
        <IconButton
          onTouchStart={() => {
            set(4);
          }}
          icon={() => <Icon color="lightblue" size={30} name={thursdayIcon} />}
        />
        <IconButton
          onTouchStart={() => {
            set(5);
          }}
          icon={() => <Icon color="lightblue" size={30} name={fridayIcon} />}
        />
        <IconButton
          onTouchStart={() => {
            set(6);
          }}
          icon={() => <Icon color="lightblue" size={30} name={saturdayIcon} />}
        />
        <IconButton
          onTouchStart={() => {
            set(7);
          }}
          icon={() => <Icon color="lightblue" size={30} name={sundayIcon} />}
        />
      </HStack>
    </>
  );
}
