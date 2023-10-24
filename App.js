import React, { useState } from 'react';
import { Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OrderDetails from './Screens/OrderDetails';


const Stack = createStackNavigator();

const App = () => {
  const [isOnline, setIsOnline] = useState(true);

  const toggleOnlineStatus = () => {
    setIsOnline(!isOnline);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OrderDetails" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OrderDetails" component={OrderDetails} />



      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
