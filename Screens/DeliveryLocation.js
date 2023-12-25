import React from 'react';
import { TextInput } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontLoader from '../FontLoader';


const DeliveryLocation = () => {
  return (
    <FontLoader>
    <View>
      {/* Updated header with blue background color */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 1,
          backgroundColor: '#3498db', // Blue color
          height: '60px',
          marginTop:35
        }}
      >
        {/* Updated TouchableOpacity with 80% width and centered */}
        <TouchableOpacity
          style={{
            backgroundColor: '#3498db',
            borderRadius: 50,
            padding: 10,
            margin: 5,
            width: '10%', // 80% width
            alignItems: 'center', // Centered
          }}
        >
          <Icon name="chevron-back-outline" size={25} color="white" />
        </TouchableOpacity>

        {/* Updated TouchableOpacity with 80% width and centered */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            flexGrow: 2,
            marginLeft:20
          }}
        >
          <Text style={{ fontSize: 15, color: 'white', fontWeight: '800' ,fontFamily:"DMSansSB"}}>
            Select Delivery Location
          </Text>
        </TouchableOpacity>
      </View>

      {/* Updated search bar styles */}
      <View style={{ overflow: 'hidden', paddingBottom: 5 }}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 5,
            shadowColor: '#ababb2',
            shadowOffset: { width: 0, height: 0.3 },
            shadowOpacity: 0.4,
            shadowRadius: 2,
            elevation: 5,
            paddingHorizontal: 10,
            marginTop:20
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              borderRadius: 10,
              padding: 10,
              borderColor: '#858484',
              borderWidth: 1,
              alignItems: 'center',
             
            }}
          >
            <Icon name="search" size={20} color="black" />
            <TextInput placeholder="Search for your society" style={{ marginLeft: 10 ,fontFamily:"DMSansSB",width:200}} />
          </View>
        </View>
      </View>
    </View>
    </FontLoader>
  );
};

export default DeliveryLocation;
