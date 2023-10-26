import { SafeAreaView, StatusBar, Dimensions } from 'react-native';
import NavBarOrder from '../components/OrderTypes/NavBarOrder';
import OrderStatus from '../components/OrderDetails/OrderStatus';

import Card from '../components/Home/Card';

const OrderDetails = () => {

    return (
        <SafeAreaView style={{ flex: 1, }}>

            <StatusBar backgroundColor="#131927" barStyle="light-content" />
            <NavBarOrder />
            <OrderStatus />
            <Card />
        </SafeAreaView>
    );
};

export default OrderDetails;