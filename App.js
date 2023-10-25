// Import necessary modules and components
import React from 'react';
import { View, Text } from 'react-native';
import ItemList from './components/OrderDetails/ItemList';
import OrderSummary from './components/OrderDetails/OrderSummary';

// Create your root component
const App = () => {
  return (
    <View>
      <OrderSummary/>
    </View>
  );
};

// Export your root component as the main entry point
export default App;
