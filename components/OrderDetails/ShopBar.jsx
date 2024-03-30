import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import FontLoader from '../../FontLoader';

const ShopBar = () => {
  const handlePress = () => {
    console.log("button pressed");
  };

  const percentage = 80; // Change this value as needed

  return (
    <FontLoader>
      <View style={{ flexDirection: 'row', backgroundColor: 'white', borderRadius: 10, padding: 10, marginHorizontal: 10, marginVertical: 50, borderColor: '#989BA4', borderWidth: 0.5, justifyContent: "space-between", alignItems: "center", paddingVertical: 30 }}>
        <View style={{ flex: 1, marginLeft: 15 }}>
          <Text style={{ fontSize: 15, fontWeight: '500', fontFamily: "DMSansSB" }}>BigBasket
        <Icon name='flash' style={{ fontSize: 22, color: '#FFB000',marginTop:10}}></Icon>  </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 13, color: '#a9a9a9', marginTop: 9, marginLeft: 0, fontFamily: "DMSansR" }}>Shop no-4 , French Arcade ,Noida</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 13 }}>
            {/* Unfilled line */}
            <View style={{ backgroundColor: '#EB8634', height: 5, width: `${percentage}%` }} />
            {/* Filled line */}
            
            <View style={{ backgroundColor: '#ccc', height: 5, flex: 1 }} />
          </View>
        </View>
        <View style={{ marginLeft: 10 }}>
          <TouchableOpacity onPress={handlePress} style={{ backgroundColor: "#66A866", paddingHorizontal: 30, paddingVertical: 5, borderRadius: 10, marginBottom: 20 }}>
            <Text style={{ color: "white", fontWeight: "500" }}>ADD</Text>
          </TouchableOpacity>
          <Text style={{ marginLeft: 20, fontWeight: "600", fontSize: 15 }}>Rs 15</Text>
        </View>
      </View>
    </FontLoader>
  );
};

export default ShopBar;
