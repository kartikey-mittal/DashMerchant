import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrderPage from './Screens/OrderPage';
import BottomTabBar from './components/BottomTabBar';
import HomeScreen from './Screens/HomeScreen';
import Catalogue from './Screens/Catalogue';
import Support from './Screens/Support';
import EditCatalouge from './Screens/EditCatalouge';
import NewOrderScreen from './Screens/NewOrderScreen';
import OrderScreen from './Screens/OrderScreen';
import LoginScreen from './Screens/Loginscreenone';
import LoginscreenTwo from './Screens/Loginscreentwo';
import ShopDetails from './Screens/ShopDetails';
import ShopCategory from './Screens/ShopCategory';
import ThankYouScreen from './Screens/DetailsSubmitted';
import ShopDetailstwo from './Screens/ShopDetailstwo';
import DeliveryLocation from './Screens/DeliveryLocation';

const Stack = createStackNavigator();

const AppNavigator = () => {
        return (
      
          <NavigationContainer>
            <Stack.Navigator initialRouteName="OrderPage" screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="OrderPage" component={OrderPage} />
              {/* <Stack.Screen name="BottomTabBar" component={BottomTabBar} /> */}
              <Stack.Screen name="Catalogue" component={Catalogue} />
              <Stack.Screen name="EditCatalouge" component={EditCatalouge} />
              <Stack.Screen name="Support" component={Support} />
              <Stack.Screen name="NewOrderScreen" component={NewOrderScreen} />
              <Stack.Screen name="OrderScreen" component={OrderScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="LoginscreenTwo" component={LoginscreenTwo} />
              <Stack.Screen name="ShopDetails" component={ShopDetails} />
              <Stack.Screen name="ShopCategory" component={ShopCategory} />
              <Stack.Screen name="ThankYouScreen" component={ThankYouScreen} />
              <Stack.Screen name="ShopDetailstwo" component={ShopDetailstwo} />
              <Stack.Screen name="DeliveryLocation" component={DeliveryLocation} />
              
      
          
      
            </Stack.Navigator>
          </NavigationContainer>
        );
      };
      
      export default AppNavigator;
      