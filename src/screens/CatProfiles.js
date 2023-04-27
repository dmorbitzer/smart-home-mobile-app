import {Stack} from "@react-native-material/core";
import {useState} from "react";
import {RefreshControl, ScrollView, StyleSheet} from "react-native";

import {GetCatProfiles} from "../api/CatProfiles";
import Profiles from "../components/cat-profiles/Profiles";
import Loading from "../components/util/Loading";

export default function CatProfiles({navigation}) {
    const [refreshing, setRefreshing] = useState(false);
    const getData = GetCatProfiles();

    const onRefresh = () => {
        setRefreshing(true);
        getData.refetch();
        setRefreshing(false);
    };

    if (getData.loading) {
        return <Loading/>;
    }
    console.log(getData.data.cats.edges);
    return (
        <Stack m={4} spacing={2}>
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh}>
                <ScrollView style={styles.catProfileList}>
                    <Profiles data={getData.data.cats.edges} navigation={navigation}/>
                </ScrollView>
            </RefreshControl>
        </Stack>
    );
}

const styles = StyleSheet.create({
    catProfileList: {
        height: "90%",
    },
});
