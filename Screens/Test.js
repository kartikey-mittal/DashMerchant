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
import Cardtwo from '../components/Home/Cardtwo';
// import TotalSaleCard from '../components/Home/TotalSaleCard';
import DashRecommendCard from '../components/Home/DashRecommendCard';
import Barchart from '../components/Home/Barchart';
import OrderItemCard from '../components/OrderDetails/OrderItemCard';




const Test = () => {
    return (
        <View style={{ backgroundColor: '#f6f6f6', flex: 1 }}>

            {/* <Text>TEST SCREEN</Text> */}
          
            {/* <TotalSaleCard backgroundColor="#66be84" iconName="progress-check" title="Accepted Bag(s)" iconNametwo="progress-check"/> */}
            {/* <DashRecommendCard backgroundColor="#66be84" iconName="progress-check" title="Accepted Bag(s)" iconNametwo="progress-check"/> */}
            {/* <Barchart/> */}
            <OrderItemCard/>

        </View>
    );
}



export default Test;
