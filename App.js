import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrderPage from './Screens/OrderPage';
import BottomTabBar from './components/BottomTabBar';
import Home from './Screens/HomeScreen';
import Catalogue from './Screens/Catalogue';
import Support from './Screens/Support';
import Test from './Screens/Test';



const Stack = createStackNavigator();

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Test');

  let ScreenComponent;
  switch (currentScreen) {
    case 'Orders':
      ScreenComponent = OrderPage;
      break;
    case 'Catalogue':
      ScreenComponent = Catalogue;
      break;
    case 'Support':
      ScreenComponent = Support;
      break;
    case 'Test':
      ScreenComponent = Test;
      break;
    default:
      ScreenComponent = Home;
  }

  return (
    <View style={styles.container}>
      <View style={styles.screenContainer}>
        <ScreenComponent />
      </View>
      <BottomTabBar onTabPress={setCurrentScreen} currentTab={currentScreen} />
    </View>
  );
};
//APP.JS PAGE

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
  },
});



