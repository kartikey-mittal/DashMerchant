import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // replace with your actual icon component
import FontLoader from '../../FontLoader';

const NavBarOrder = ({ title, onBackPress, onSecondIconPress, backIconName, secondIconName }) => {
    return (
        <FontLoader>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, backgroundColor: '#131927', }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={onBackPress}>
                    <Icon name={backIconName} size={35} color="white" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, color: 'white', marginLeft: 10 ,fontFamily:"DMSansR"}}>{title}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={onSecondIconPress}>
                    <Icon name={secondIconName} size={30} color="white" style={{ margin: 10 }} />
                </TouchableOpacity>
            </View>
        </View>
        </FontLoader>
    );
};

export default NavBarOrder;
