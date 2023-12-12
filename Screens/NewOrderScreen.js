import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavBarOrder from '../components/OrderTypes/NavBarOrder';
import OrderCard from '../components/OrderTypes/OrderCard';
import { ScrollView } from 'react-native';

const NewOrderScreen = () => {
    return (
        <View>
            <NavBarOrder
                title="New Orders"
                onBackPress={() => { /* Navigate to a different screen */ }}
                onSecondIconPress={() => { /* Do something when the help icon is pressed */ }}
                backIconName="chevron-back-outline"
                secondIconName="search-outline"
            />
            <ScrollView>
                <OrderCard />
                <OrderCard />

            </ScrollView>


        </View>
    );
}



export default NewOrderScreen;
