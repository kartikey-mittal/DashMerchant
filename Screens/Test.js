import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import NewOrderScreen from './NewOrderScreen';
import OrderScreen from './OrderScreen';
import Catalogue from './Catalogue';
import LoginScreen from './Loginscreenone';
import LoginscreenTwo from './Loginscreentwo';
import ShopDetails from './ShopDetails';
import ShopCategory from './ShopCategory';
import ThankYouScreen from './DetailsSubmitted';
import ShopDetailstwo from './ShopDetailstwo';
import DeliveryLocation from './DeliveryLocation';
import EditCatalouge from './EditCatalouge';




const Test = () => {
    return (
        <View style={{ backgroundColor: '#f6f6f6', flex: 1 }}>

            {/* <Text>TEST SCREEN</Text> */}
          
          <EditCatalouge/>
        


        </View>
    );
}



export default Test;
