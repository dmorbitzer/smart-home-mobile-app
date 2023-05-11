import { Divider, Stack } from "@react-native-material/core";
import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

import { useAddCatProfile } from "../api/CatProfiles";
import { useGetGenders } from "../api/Gender";
import getIcon from "../api/getIcon";
import GeneralInformation from "../components/cat-profiles/add-profile/GeneralInformation";
import IconButton from "../components/util/IconButton";
import Loading from "../components/util/Loading";

export default function AddCat({ navigation }) {
  if (!global.jwt) {
    navigation.navigate("Login");
  }
  const addCat = useAddCatProfile();
  const genders = useGetGenders();

  const [loading, setLoading] = useState(false);

  const [catName, setCatName] = useState("");
  const [catBirthdate, setCatBirthdate] = useState(null);
  const [catSex, setCatSex] = useState(null);
  const [catRace, setCatRace] = useState("");
  const [catWeight, setCatWeight] = useState(0);

  const [hasCatNameError, setHasCatNameError] = useState(false);
  const [hasBirthdateError, setHasBirthdateError] = useState(false);
  const [hasCatSexError, setHasCatSexError] = useState(false);
  const [hasCatRaceError, setHasCatRaceError] = useState(false);
  const [hasCatWeightError, setHasCatWeightError] = useState(false);

  const validate = () => {
    if (catName.length === 0) {
      setHasCatNameError(true);
    } else {
      setHasCatNameError(false);
    }

    if (catBirthdate === null) {
      setHasBirthdateError(true);
    } else {
      setHasBirthdateError(false);
    }

    if (catSex === null) {
      setHasCatSexError(true);
    } else {
      setHasCatSexError(false);
    }

    if (catRace.length === 0) {
      setHasCatRaceError(true);
    } else {
      setHasCatSexError(false);
    }

    if (catWeight === 0) {
      setHasCatWeightError(true);
    } else {
      setHasCatWeightError(false);
    }

    return !(
      catName.length === 0 ||
      catBirthdate === null ||
      catSex === null ||
      catRace.length === 0 ||
      catWeight === 0
    );
  };

  const saveCat = async () => {
    if (!validate()) {
      return;
    }
    setLoading(true);
    const response = await addCat(
      catName,
      catBirthdate,
      catWeight,
      catRace,
      catSex
    );
    setLoading(false);
    if (response) {
      navigation.navigate("Katzenprofil", {
        refresh: true,
      });
    }
  };

  if (genders.loading || loading) {
    return <Loading />;
  }

  return (
    <ScrollView style={styles.addCatView} nestedScrollEnabled>
      <Stack spacing={2} style={{ margin: 32 }}>
        <GeneralInformation
          genders={genders.data.genders.edges}
          catName={catName}
          setCatName={setCatName}
          catBirthdate={catBirthdate}
          setCatBirthdate={setCatBirthdate}
          catSex={catSex}
          setCatSex={setCatSex}
          catWeight={catWeight}
          setCatWeight={setCatWeight}
          catRace={catRace}
          setCatRace={setCatRace}
          hasCatNameError={hasCatNameError}
          hasBirthdateError={hasBirthdateError}
          hasCatSexError={hasCatSexError}
          hasCatWeightError={hasCatWeightError}
          hasCatRaceError={hasCatRaceError}
        />
        <Divider style={styles.divider} />
        <IconButton
          key={1}
          title="Speichern"
          type="primary"
          func={saveCat}
          icon={getIcon("Speichern")}
        />
      </Stack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  addCatView: {
    height: "100%",
  },
  divider: {
    marginTop: 30,
  },
});
