import React from "react";
import {
        View,
        Text,

        StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const OrderSummary = () => {
        const details = [
                {
                        key: 1,
                        name: "Aviral Saxena",
                        address: "XYZ Lane , New York",
                        mobile: "+91 98765433",
                        date: "Sat 23,Oct 2023",
                        time: "12:05 PM",
                        totalamt: "Rs 85",
                },
        ];

        return (
                <View>
                        <Text style={styles.title}> Order Summary </Text>
                        {details.map((detail) => (
                                <View
                                        style={styles.detailscard}
                                        key={details.key}
                                >
                                        <View style={styles.above}>
                                                <Icon
                                                        name="location-outline"
                                                        size={30}
                                                        color="black"
                                                />
                                                <View style={styles.aboveright}>
                                                        <Text>
                                                                {detail.name}
                                                        </Text>
                                                        <Text style={{ color: "gray" }}>
                                                                {detail.address}
                                                        </Text>
                                                </View>
                                        </View>
                                        <View style={styles.middle}>
                                                <Icon
                                                        name="call-outline"
                                                        size={30}
                                                        color="black"
                                                />
                                                <View style={styles.middleright}>
                                                        <Text style={{ textDecorationLine: "underline" }}>
                                                                {detail.mobile}
                                                        </Text>

                                                </View>
                                        </View>
                                        <View style={styles.bottom}>
                                                <Icon
                                                        name="calendar-outline"
                                                        size={30}
                                                        color="black"
                                                />
                                                <View style={styles.bottomright}>
                                                        <Text>
                                                                {detail.date}
                                                        </Text>
                                                        <Text style={styles.bar}>
                                                                |
                                                        </Text>
                                                        <Text style={styles.time}>
                                                                {detail.time}
                                                        </Text>
                                                </View>

                                        </View>

                                        <View style={styles.amt}>
                                                <Icon
                                                        name="wallet-outline"
                                                        size={30}
                                                        color="black"
                                                />
                                                <View style={styles.amtright}>
                                                        <Text>
                                                                Total Order Amount :
                                                        </Text>
                                                        <Text style={styles.fullamt}>
                                                                {detail.totalamt}
                                                        </Text>
                                                </View>
                                        </View>
                                </View>
                        ))}
                </View>
        );
};

const styles = StyleSheet.create({
        title: { marginTop: 100, marginLeft: 20, fontWeight: "500", fontSize: 20 },
        detailscard: {
                width: "90%",
                alignSelf: "center",
                height: 210,
                backgroundColor: "white",
                marginTop: 30,
                padding: 10,
                elevation: 1,
                borderRadius: 10

        },
        above: {
                display: "flex",
                flexDirection: "row",

        },
        aboveright: {
                marginLeft: 10
        },
        middle: {
                marginTop: 15,
                display: "flex",
                flexDirection: "row",
        },
        middleright: {
                marginLeft: 15,
                marginTop: 5
        },
        bottom: {
                marginTop: 15,
                display: "flex",
                flexDirection: "row",
        },
        bottomright: {
                marginLeft: 15,
                marginTop: 5,
                display: "flex",
                flexDirection: "row",
        },
        amt: {
                marginTop: 25,
                display: "flex",
                flexDirection: "row",
        },
        amtright: {
                marginLeft: 15,
                marginTop: 5,
                display: "flex",
                flexDirection: "row",
        },
        fullamt: {
                marginTop: -5,
                fontSize: 20,
                marginLeft: 10,
                color: "#91D086"
        },
        time: {
                marginLeft: 10
        },
        bar: {
                marginLeft: 15
        }
});

export default OrderSummary;
