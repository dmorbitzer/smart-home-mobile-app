import { Button, Box } from "@react-native-material/core";

export default function IconButton(props) {
  return (
    <Box mt={30} mb={0} ml={20} mr={20}>
      <Button
        style={{
          minHeight: 60,
          justifyContent: "center",
        }}
        titleStyle={{
          fontSize: 25,
        }}
        title={props.title}
        color={
          props.type === "primary"
            ? "lightblue"
            : props.type === "secondary"
            ? "grey"
            : "red"
        }
        leading={props.icon}
        onTouchStart={() => {
          if (props.func) {
            props.func();
          }
        }}
      />
    </Box>
  );
}
