import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const LoginScreen = () => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleGetOTP = () => {
    // Handle logic for getting OTP
    console.log('Get OTP for mobile number:', mobileNumber);
  };

  return (
    <View style={styles.container}>
      {/* Slideable Image */}
      <Swiper style={styles.swiperContainer} loop={true} autoplay={true} paginationStyle={styles.paginationStyle} 
  dotStyle={styles.dotStyle} 
  activeDotStyle={styles.activeDotStyle} >
        {/* Add your image components here, for example: */}
        <View style={styles.slide}>
          <Image source={require('../assets/shop1.webp')} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={require('../assets/shop2.webp')} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={require('../assets/shop3.jpeg')} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={require('../assets/shop4.webp')} style={styles.image} />
        </View>
        {/* Add more slides as needed */}
      </Swiper>

      {/* Input for Mobile Number */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Your Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          keyboardType="numeric"
          value={mobileNumber}
          onChangeText={(text) => setMobileNumber(text)}
        />
      </View>

      {/* Get OTP Button */}
      <TouchableOpacity style={styles.button} onPress={handleGetOTP}>
        <Text style={styles.buttonText}>Get OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
        },
        swiperContainer: {
          height: 500, // Set a fixed height for the swiper container
        },
        slide: {
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 20,
          marginTop: 30,
        },
        image: {
          width: '100%',
          height: undefined,
          aspectRatio: 1,
          resizeMode: 'cover',
          borderRadius: 10, // Add border-radius if desired
        },
        inputContainer: {
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20, // Add spacing between swiper and input
          marginBottom: 200
        },
        label: {
          fontSize: 16,
          marginBottom: 10,
        },
        input: {
          width: '80%',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 5,
          paddingLeft: 10,
          marginTop:10
        },
        button: {
          backgroundColor: '#007bff',
          justifyContent: 'center',
          alignItems: 'center',
          height: 50,
          marginTop: 10, // Add spacing between input and button
          marginBottom:0
        },
        buttonText: {
          color: '#fff',
          fontSize: 18,
        },
        paginationStyle: {
                top: 400, // Adjust the top value based on your layout
                alignItems: 'center',
                justifyContent: 'center',
              },
              
        dotStyle: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ccc', // Color of inactive dots
        margin: 4,
        },
        
        activeDotStyle: {
        width: 8,
        height: 25,
        borderRadius: 6,
        backgroundColor: '#007bff', // Color of active dot
        margin: 4,
        },
      });
      

export default LoginScreen;