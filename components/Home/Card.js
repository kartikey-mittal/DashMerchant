import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // replace with your actual icon component

const Card = () => {
    return (
        <View style={{ borderRadius: 10, backgroundColor: '#e68943', height: 150, width: 170, margin: 5 }}>

            <View style={{ backgroundColor: 'yellow', flex: 0.3, flexDirection: 'row' }}>
                <View style={{ backgroundColor: 'red', flex: 0.75 }}>

                </View>
            </View>
            {/* Second Row */}
            <View style={{ backgroundColor: 'pink', flex: 0.5, flexDirection: 'row' }}>
                <Text style={{ textAlign: 'center', textAlignVertical: 'center', margin: 10, marginLeft: 20, fontSize: 35, fontWeight: 800, color: "white" }}>3</Text>

                <View style={{}}></View>

            </View>

        </View>
    )
}

export default Card;