import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontLoader from '../../FontLoader';

const Card = ({ iconName, backgroundColor, title }) => {
    return (
        <FontLoader>
        <TouchableOpacity>
            <View style={{ borderRadius: 10, backgroundColor: backgroundColor, height: 120, width: 170, margin: 5, elevation: 5 }}>
                {/* First Row */}
                <View style={{ flex: 0.7, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flex: 0.95, flexDirection: 'column', justifyContent: 'center' }}>
                        <Text style={{ marginLeft: 10, textAlignVertical: 'center', color: 'white',fontFamily:"DMSansR" }}>{title}</Text>
                        <View style={{ marginLeft: 10, marginTop: 5, width: 40, backgroundColor: '#574f4f', height: 1 }}></View>

                    </View>
                    <Icon name={iconName} style={{ textAlignVertical: 'center', fontSize: 30, color: 'white', marginRight: 1 ,transform: [{ rotate: '45deg' }]}}></Icon>

                </View>
                {/* Second Row */}
                <View style={{ flex: 0.5, flexDirection: 'row', alignItems: 'center', marginBottom: 2 }}>
                    
                    <Text style={{ textAlign: 'center', textAlignVertical: 'center', marginRight: 15, marginLeft: 20, fontSize: 35, fontWeight: 800, color: "white" ,fontFamily:"DMSansR"}}>₹ 3</Text>

                    

                </View>
                

            </View >
        </TouchableOpacity>
        </FontLoader>
    )
}

export default Card;