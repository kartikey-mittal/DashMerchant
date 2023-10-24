import { SafeAreaView, StatusBar, Dimensions } from 'react-native';
import NavBarOrder from '../components/OrderDetails/NavBarOrder';
import OrderStatus from '../components/OrderDetails/OrderStatus';

const OrderDetails = () => {

    return (
        <SafeAreaView style={{ flex: 1, }}>

            <StatusBar backgroundColor="#131927" barStyle="light-content" />
            <NavBarOrder />
            <OrderStatus />
        </SafeAreaView>
    );
};

export default OrderDetails;