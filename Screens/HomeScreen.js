import React from "react";
import Card from "../components/Home/Card";

import { SafeAreaView, StatusBar, View } from 'react-native';
import NavBar from "../components/Home/NavBar";
import DispatchCard from "../components/Home/DispatchCard";
import FontLoader from "../FontLoader";




const HomeScreen = () => {
    return (
        <FontLoader>
        <SafeAreaView>
            <StatusBar backgroundColor="#131927" barStyle="light-content" />
            <NavBar />
            <View style={{ backgroundColor: '#131927', height: '80%', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, paddingTop: 30, marginBottom: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Card backgroundColor="#e68943" iconName="arrow-down-circle" rotationDegree={45} title="New Bag(s)" />
                    <Card backgroundColor="#66be84" iconName="progress-check" rotationDegree={0} title="Accepted Bag(s)" />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <DispatchCard />
                </View>


              




            </View>

        </SafeAreaView>
        </FontLoader>
    )
}

export default HomeScreen;