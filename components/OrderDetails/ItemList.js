import React from "react";
import {
        View,
        Text,
        TouchableOpacity,
        FlatList,
        Image,
        StyleSheet,
        ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const ItemList = () => {
        const items = [
                {
                        key: 1,
                        name: "Cabury Daily Milk Nuts",
                        weight: "56.5gm",
                        rupees: "Rs.50",
                },
        ];

        const imageUrl = "https://picsum.photos/50/50";
        const totalitems = 2;
        return (
                <ScrollView
                        style={styles.maincontainer}
                        showsVerticalScrollIndicator={false}
                >
                        <View style={styles.cardmain}>
                                <Image
                                        source={{ uri: imageUrl }}
                                        style={styles.img}
                                />
                                <View style={styles.middletext}>
                                        {items.map((item) => (
                                                <View key={item.key}>
                                                        <Text
                                                                style={
                                                                        styles.data
                                                                }
                                                        >
                                                                {item.name}
                                                        </Text>
                                                        <Text
                                                                style={[
                                                                        styles.data,
                                                                        styles.middledata,
                                                                ]}
                                                        >
                                                                {item.weight}
                                                        </Text>

                                                        <Text
                                                                style={[
                                                                        styles.data,
                                                                        styles.lastdata,
                                                                ]}
                                                        >
                                                                {item.rupees} X{" "}
                                                                <Text
                                                                        style={
                                                                                styles.quanno
                                                                        }
                                                                >
                                                                        {totalitems}
                                                                </Text>
                                                        </Text>
                                                </View>
                                        ))}
                                </View>

                                <Icon
                                        name="checkbox-outline"
                                        size={30}
                                        color="white"
                                        style={styles.icon}
                                />
                        </View>
                </ScrollView>
        );
};

const styles = StyleSheet.create({
        maincontainer: {
                marginTop: 100,
        },
        cardmain: {
                width: 375,
                height: 95,
                backgroundColor: "gray",
                alignSelf: "center",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // justifyContent:"space-between"
        },
        data: {
                color: "white",
        },
        quanno: {
               
                backgroundColor: "#0A5098",
                fontSize: 18,
        },
        middledata: {
                fontSize: 12,
                marginTop: 4,
                color: "black",
        },
        lastdata: {
                marginTop: 6,
        },

        img: {
                width: 80,
                height: 60,
                marginLeft: 20,
        },
        middletext: {
                marginLeft: 30,
        },
        icon: {
                marginLeft: 45,
        },
});

export default ItemList;
