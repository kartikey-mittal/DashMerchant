import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontLoader from '../../FontLoader';

const Cardtwo = ({ iconName, backgroundColor, rotationDegree, title }) => {
    return (
        <FontLoader>
        <TouchableOpacity>
            <View style={{ borderRadius: 10, backgroundColor: backgroundColor, height: 160, width: 170, margin: 5, elevation: 5 }}>
                {/* First Row */}
                <View style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flex: 0.95, flexDirection: 'column', justifyContent: 'center' }}>
                        <Text style={{ marginLeft: 10, textAlignVertical: 'center', color: 'white',fontFamily:"DMSansR" }}>{title}</Text>
                        <View style={{ marginLeft: 10, marginTop: 5, width: 40, backgroundColor: '#574f4f', height: 1 }}></View>

                    </View>
                    <Icon name={iconName} style={{ textAlignVertical: 'center', fontSize: 35, color: 'white', marginRight: 1, transform: [{ rotate: `${rotationDegree}deg` }] }}></Icon>

                </View>
                {/* Second Row */}
                <View style={{ flex: 0.5, flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={{ textAlign: 'center', textAlignVertical: 'center', marginRight: 15, marginLeft: 20, fontSize: 35, fontWeight: 800, color: "white" ,fontFamily:"DMSansR"}}>3</Text>

                    <View style={{ backgroundColor: '#574f4f', width: 1, height: 40 }}></View>
                    <Text style={{ textAlign: 'center', textAlignVertical: 'center', marginLeft: 15, fontSize: 20, color: "white" ,fontFamily:"DMSansR"}}>5 Order </Text>

                </View>
                {/* Third Row */}

                <View style={{ flex: 0.25, textAlignVertical: 'center', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#D9D9D9', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                    <Text style={{ color: 'black', marginLeft: 10, textAlignVertical: 'center',fontFamily:"DMSansR" }}>Rs. 245</Text>
                    <Icon name="arrow-right" style={{ textAlignVertical: 'center', marginRight: 5, fontSize: 20, color: '#131972' }}></Icon>
                </View>

            </View >
        </TouchableOpacity>
        </FontLoader>
    )
}

export default Cardtwo;