import { Button, Box } from "@react-native-material/core";

export default function IconButton(props) {
  return (
    <Box
      mt={props.customMargin || 30}
      mb={props.customMargin | 0}
      ml={20}
      mr={20}
    >
      <Button
        disabled={props.disabled}
        variant={
          props.variant === "outlined"
            ? "outlined"
            : props.variant === "text"
            ? "text"
            : "contained"
        }
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
            : "darkred"
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
