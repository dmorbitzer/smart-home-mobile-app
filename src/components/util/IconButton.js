import { Button, Box } from "@react-native-material/core";

export default function IconButton(props) {
  return (
    <Box mt={10} mb={10} ml={20} mr={20}>
      <Button
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
          props.func();
        }}
      />
    </Box>
  );
}
