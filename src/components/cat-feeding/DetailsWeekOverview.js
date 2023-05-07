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
  const weekDayInitial = ["m", "d", "m", "d", "f", "s", "s"];
  const setWeekDayArray = [
    setMondayIcon,
    setTuesdayIcon,
    setWednesdayIcon,
    setThursdayIcon,
    setFridayIcon,
    setSaturdayIcon,
    setSundayIcon,
  ];
  const unSetWeekdayIcon = () => {
    for (let i = 0; i < setWeekDayArray.length; i++) {
      setWeekDayArray[i](`alpha-${weekDayInitial[i]}`);
    }
  };

  const setWeekdayIcon = (weekDay) => {
    props.setWeekDay(weekDay);
    unSetWeekdayIcon();
    setWeekDayArray[weekDay - 1](
      `alpha-${weekDayInitial[weekDay - 1]}-circle-outline`
    );
  };
  useEffect(() => {
    if (props.weekDay) {
      setWeekdayIcon(props.weekDay);
    }
  });
  return (
    <HStack fill center spacing={3}>
      <IconButton
        onTouchStart={() => {
          setWeekdayIcon(1);
        }}
        icon={() => <Icon color="lightblue" size={30} name={mondayIcon} />}
      />
      <IconButton
        onTouchStart={() => {
          setWeekdayIcon(2);
        }}
        icon={() => <Icon color="lightblue" size={30} name={tuesdayIcon} />}
      />
      <IconButton
        onTouchStart={() => {
          setWeekdayIcon(3);
        }}
        icon={() => <Icon color="lightblue" size={30} name={wednesdayIcon} />}
      />
      <IconButton
        onTouchStart={() => {
          setWeekdayIcon(4);
        }}
        icon={() => <Icon color="lightblue" size={30} name={thursdayIcon} />}
      />
      <IconButton
        onTouchStart={() => {
          setWeekdayIcon(5);
        }}
        icon={() => <Icon color="lightblue" size={30} name={fridayIcon} />}
      />
      <IconButton
        onTouchStart={() => {
          setWeekdayIcon(6);
        }}
        icon={() => <Icon color="lightblue" size={30} name={saturdayIcon} />}
      />
      <IconButton
        onTouchStart={() => {
          setWeekdayIcon(7);
        }}
        icon={() => <Icon color="lightblue" size={30} name={sundayIcon} />}
      />
    </HStack>
  );
}
