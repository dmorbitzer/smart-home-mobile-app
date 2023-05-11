import { Divider, Stack } from "@react-native-material/core";
import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

import { useEditCatProfile, useGetCatDetails } from "../api/CatProfiles";
import { useGetGenders } from "../api/Gender";
import getIcon from "../api/getIcon";
import GeneralInformation from "../components/cat-profiles/add-profile/GeneralInformation";
import IconButton from "../components/util/IconButton";
import Loading from "../components/util/Loading";

export default function EditCat({ route, navigation }) {
  if (!global.jwt) {
    navigation.navigate("Login");
  }
  const catDetails = useGetCatDetails(route.params.id);
  const genders = useGetGenders();
  const editCat = useEditCatProfile();

  const [loading, setLoading] = useState(false);

  const [catName, setCatName] = useState("");
  const [catBirthdate, setCatBirthdate] = useState(null);
  const [catSex, setCatSex] = useState(null);
  const [catRace, setCatRace] = useState("");
  const [catWeight, setCatWeight] = useState(0);

  const [catNameChanged, setCatNameChanged] = useState(false);
  const [catBirthdateChanged, setCatBirthdayChanged] = useState(false);
  const [catSexChanged, setCatSexChanged] = useState(false);
  const [catRaceChanged, setCatRaceChanged] = useState(false);
  const [catWeightChanged, setCatWeightChanged] = useState(false);

  const [hasCatNameError, setHasCatNameError] = useState(false);
  const [hasBirthdateError, setHasBirthdateError] = useState(false);
  const [hasCatSexError, setHasCatSexError] = useState(false);
  const [hasCatRaceError, setHasCatRaceError] = useState(false);
  const [hasCatWeightError, setHasCatWeightError] = useState(false);

  const editCatName = (name) => {
    setCatName(name);
    setCatNameChanged(true);
  };

  const editCatBirthdate = (birthdate) => {
    setCatBirthdate(birthdate);
    setCatBirthdayChanged(true);
  };

  const editCatSex = (sex) => {
    setCatSex(sex);
    setCatSexChanged(true);
  };

  const editCatRace = (race) => {
    setCatRace(race);
    setCatRaceChanged(true);
  };

  const editCatWeight = (weight) => {
    setCatWeight(weight);
    setCatWeightChanged(true);
  };

  const validate = () => {
    if (catNameChanged && catName.length === 0) {
      setHasCatNameError(true);
    } else {
      setHasCatNameError(false);
    }

    if (catBirthdateChanged && catBirthdate === null) {
      setHasBirthdateError(true);
    } else {
      setHasBirthdateError(false);
    }

    if (catSexChanged && catSex === null) {
      setHasCatSexError(true);
    } else {
      setHasCatSexError(false);
    }

    if (catRaceChanged && catRace.length === 0) {
      setHasCatRaceError(true);
    } else {
      setHasCatSexError(false);
    }

    if (catWeightChanged && catWeight === 0) {
      setHasCatWeightError(true);
    } else {
      setHasCatWeightError(false);
    }

    return !(
      (catNameChanged && catName.length === 0) ||
      (catBirthdateChanged && catBirthdate === null) ||
      (catSexChanged && catSex === null) ||
      (catRaceChanged && catRace.length === 0) ||
      (catWeightChanged && catWeight === 0)
    );
  };

  const saveChanges = async () => {
    if (!validate()) {
      return;
    }
    setLoading(true);
    const response = await editCat(
      route.params.id,
      catNameChanged ? catName : catDetails.data.cat.name,
      catBirthdateChanged ? catBirthdate : catDetails.data.cat.birthdate,
      catWeightChanged ? catWeight : catDetails.data.cat.weight,
      catRaceChanged ? catRace : catDetails.data.cat.race,
      catSexChanged ? catSex : catDetails.data.cat.gender.id
    );

    setLoading(false);
    if (response) {
      navigation.navigate("Katzendetailansicht", {
        refresh: true,
        catId: route.params.id,
      });
    }
  };

  if (catDetails.loading || genders.loading || loading) {
    return <Loading />;
  }

  return (
    <ScrollView style={styles.addCatView} nestedScrollEnabled>
      <Stack spacing={2} style={{ margin: 32 }}>
        <GeneralInformation
          genders={genders.data.genders.edges}
          catName={catNameChanged ? catName : catDetails.data.cat.name}
          setCatName={editCatName}
          catBirthdate={
            catBirthdateChanged
              ? catBirthdate
              : new Date(catDetails.data.cat.birthdate)
          }
          setCatBirthdate={editCatBirthdate}
          catSex={catSexChanged ? catSex : catDetails.data.cat.gender.name}
          setCatSex={editCatSex}
          catWeight={catWeightChanged ? catWeight : catDetails.data.cat.weight}
          setCatWeight={editCatWeight}
          catRace={catRaceChanged ? catRace : catDetails.data.cat.race}
          setCatRace={editCatRace}
          hasCatNameError={hasCatNameError}
          hasBirthdateError={hasBirthdateError}
          hasCatSexError={hasCatSexError}
          hasCatWeightError={hasCatWeightError}
          hasCatRaceError={hasCatRaceError}
          placeholder={
            catDetails.data.cat.gender.name === "male"
              ? "Männlich"
              : catDetails.data.cat.gender.name === "female"
              ? "Weiblich"
              : null
          }
        />
        <Divider style={styles.divider} />
        <IconButton
          key={1}
          title="Speichern"
          type="primary"
          func={saveChanges}
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
