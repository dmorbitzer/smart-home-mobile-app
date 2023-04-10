import { gql, useQuery } from "@apollo/client";
import { AppBar, Box } from "@react-native-material/core";

import SHButton from "../components/SHButton";
import LoadingPage from "../loading-page/LoadingPage";

const SERVICES_QUERY = gql`
  {
    services {
      edges {
        node {
          id
          name
          identifier
          active
        }
      }
    }
  }
`;

const servicesList = [];

export default function LandingPage() {
  const { data, loading } = useQuery(SERVICES_QUERY);
  if (loading) {
    return <LoadingPage />;
  }
  for (let i = 0; i < data.services.edges.length; i++) {
    let localIcon = "";
    switch (data.services.edges[i].node.name) {
      case "Katzenprofil":
        localIcon = "cat";
        break;
      case "Katzenfütterung":
        localIcon = "food";
        break;
      case "Katzenerkennung":
        localIcon = "smoke-detector-variant";
        break;
    }
    servicesList.push(
      <SHButton
        key={data.services.edges[i].node.name}
        title={data.services.edges[i].node.name}
        icon={localIcon}
        func={() => console.log(data.services.edges[i].node.name)}
      />
    );
  }
  return (
    <Box h={100}>
      <Box mt={45} mb={10}>
        <AppBar color="lightblue" title="Main Menu" />
      </Box>
      {servicesList}
    </Box>
  );
}
