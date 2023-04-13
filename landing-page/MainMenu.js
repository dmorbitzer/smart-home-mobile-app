import { Box } from "@react-native-material/core";

import GetServices from "./GetServices";
import MainMenuButton from "../components/MainMenuButton";
import LoadingPage from "../loading-page/LoadingPage";

const servicesList = [];

export default function MainMenu({ navigation }) {
  //const { data, loading } = useQuery(SERVICES_QUERY);
  const getData = GetServices();
  if (getData.loading) {
    return <LoadingPage />;
  }
  for (let i = 0; i < getData.data.services.edges.length; i++) {
    if (getData.data.services.edges[i].node.active) {
      servicesList.push(
        <MainMenuButton
          key={getData.data.services.edges[i].node.name}
          title={getData.data.services.edges[i].node.name}
          icon=""
          func={() =>
            navigation.navigate(getData.data.services.edges[i].node.name)
          }
        />
      );
    }
  }
  return <Box h={100}>{servicesList}</Box>;
}
