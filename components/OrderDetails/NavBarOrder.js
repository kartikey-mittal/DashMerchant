import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // replace with your actual icon component

const NavBarOrder = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, backgroundColor: '#131927', }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => { }}>
                    <Icon name="chevron-back-outline" size={35} color="white" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, color: 'white', marginLeft: 10 }}>Order Details</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>

                <TouchableOpacity onPress={() => { }}>
                    <Icon name="help-buoy-outline" size={30} color="white" style={{ margin: 10 }} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default NavBarOrder;
