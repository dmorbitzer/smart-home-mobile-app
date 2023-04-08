import { AppBar, Box } from "@react-native-material/core";

import SHButton from "../components/SHButton";

export default function LandingPage() {
  const homeFunc = () => {
    console.log("HOME!");
  };
  const profileFunc = () => {
    console.log("Profile!");
  };
  return (
    <Box h={100}>
      <Box mt={45} mb={10}>
        <AppBar color="lightblue" title="Main Menu" />
      </Box>
      <SHButton title="Home" icon="home" func={homeFunc} />
      <SHButton title="Profile" icon="cat" func={profileFunc} />
    </Box>
  );
}
