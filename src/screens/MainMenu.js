import GetServices from "../api/GetServices";
import Services from "../components/main-menu/Services";
import Loading from "../components/util/Loading";

export default function MainMenu({ navigation }) {
  const getData = GetServices();
  if (getData.loading) {
    return <Loading />;
  }
  return <Services data={getData.data} navigation={navigation} />;
}
