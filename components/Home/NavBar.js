import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomSwitch from './CustomSwitch';

const NavBar = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5, backgroundColor: "#131927", }}>
            <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 45, padding: 10, marginTop: 5 }}>
                <Icon name="menu" size={30} color="black" />
            </TouchableOpacity>
            <Text style={{ fontSize: 20, color: 'white', flex: 1, marginLeft: 20 }}>Shop Name</Text>

            <View style={{ flexDirection: 'row' }}>
                <CustomSwitch />

            </View>
        </View>
    );
};

export default NavBar;
