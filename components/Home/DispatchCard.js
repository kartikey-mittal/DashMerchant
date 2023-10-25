import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DispatchCard = () => {
    return (
        <View style={{ backgroundColor: '#0790e4', height: 100, width: '95%', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flex: 0.8, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ marginLeft: 10, color: 'white', marginTop: 5 }}>Dispatched Orders</Text>
            </View>
            <Icon name="truck-delivery-outline" style={{ fontSize: 35, color: 'white', marginRight: 5, }}></Icon>

        </View >
    );
}



export default DispatchCard;
