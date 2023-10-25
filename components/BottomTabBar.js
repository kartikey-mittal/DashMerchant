// BottomTabBar.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomTabBar = ({ onTabPress, currentTab }) => {
    return (
        <View style={styles.tabBar}>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => onTabPress('Home')}>
                <Icon name={currentTab === 'Home' ? "home" : "home-outline"} size={24} color={currentTab === 'Home' ? 'tomato' : 'gray'} />
                <Text style={{ color: currentTab === 'Home' ? 'tomato' : 'gray', fontWeight: currentTab === 'Home' ? 'bold' : 'normal' }}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => onTabPress('OrderPage')}>
                <Icon name={currentTab === 'OrderPage' ? "cart" : "cart-outline"} size={24} color={currentTab === 'OrderPage' ? 'tomato' : 'gray'} />
                <Text style={{ color: currentTab === 'OrderPage' ? 'tomato' : 'gray', fontWeight: currentTab === 'OrderPage' ? 'bold' : 'normal' }}>Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => onTabPress('Catalogue')}>
                <Icon name={currentTab === 'Catalogue' ? "book" : "book-outline"} size={24} color={currentTab === 'Catalogue' ? 'tomato' : 'gray'} />
                <Text style={{ color: currentTab === 'Catalogue' ? 'tomato' : 'gray', fontWeight: currentTab === 'Catalogue' ? 'bold' : 'normal' }}>Catalogue</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => onTabPress('Support')}>
                <Icon name={currentTab === 'Support' ? "headset" : "headset-outline"} size={24} color={currentTab === 'Support' ? 'tomato' : 'gray'} />
                <Text style={{ color: currentTab === 'Support' ? 'tomato' : 'gray', fontWeight: currentTab === 'Support' ? 'bold' : 'normal' }}>Support</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => onTabPress('Test')}>
                <Icon name={currentTab === 'Test' ? "build" : "build"} size={24} color={currentTab === 'Test' ? 'tomato' : 'gray'} />
                <Text style={{ color: currentTab === 'Test' ? 'tomato' : 'gray', fontWeight: currentTab === 'Test' ? 'bold' : 'normal' }}>Test</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 5,
        borderTopWidth: 1,
        borderColor: '#ddd',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
});

export default BottomTabBar;
