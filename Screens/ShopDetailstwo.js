import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import FontLoader from '../FontLoader';

const ShopDetailstwo = () => {

  const [ticketSize, setTicketSize] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [startShopTime, setStartShopTime] = useState(false);
  const [endShopTime, setEndShopTime] = useState(false);
  const [startTimeDropdownVisible, setStartTimeDropdownVisible] = useState(false);
  const [endTimeDropdownVisible, setEndTimeDropdownVisible] = useState(false);
  const [cityDropdownVisible, setCityDropdownVisible] = useState(false);



  const handleSaveDetails = () => {

    console.log('Start Time:', startTime);
    console.log('End Time:', endTime);
    console.log('Ticket Size:', ticketSize);
    console.log('Selected City:', selectedCity);

    // Add your logic to save the details or navigate to the next screen

    Alert.alert('Success', 'Details saved successfully!');

  };

  const toggleCityDropdown = () => {
    setCityDropdownVisible(!cityDropdownVisible);
  };
  const toggleStartTimeDropdown = () => {
    setStartTimeDropdownVisible(!startTimeDropdownVisible);
  };

  const toggleEndTimeDropdown = () => {
    setEndTimeDropdownVisible(!endTimeDropdownVisible);
  };


  const handleCitySelection = (city) => {
    setSelectedCity(city);
    toggleCityDropdown();
  };
  const handleTimeSelection = (time, type) => {
    if (type === 'start') {
      toggleStartTimeDropdown();
      setStartShopTime(time);
    } else if (type === 'end') {
      toggleEndTimeDropdown();
      setEndShopTime(time);
    }
  };


  return (
    <FontLoader>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Enter Shop Details</Text>

      <View style={styles.inputContainer}>
      <View style={styles.inputContainer}>
        <Text style={{fontSize:17,marginBottom:22,marginTop:10,fontWeight:"500"}}>Select Start Time of Shop</Text>
        <TouchableOpacity style={styles.cityDropdown} onPress={toggleStartTimeDropdown}>
          <Text>{startShopTime || 'Select Start Time'}</Text>
        </TouchableOpacity>

        {startTimeDropdownVisible && (
          <View style={styles.dropdownList}>
            <TouchableOpacity onPress={() => handleTimeSelection('6:00 AM','start')}>
              <Text style={styles.dropdownItem}>6:00 AM</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTimeSelection('7:00 AM','start')}>
              <Text style={styles.dropdownItem}>7:00 AM</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTimeSelection('8:00 AM','start')}>
              <Text style={styles.dropdownItem}>8:00 AM</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTimeSelection('9:00 AM','start')}>
              <Text style={styles.dropdownItem}>9:00 AM</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTimeSelection('10:00 AM','start')}>
              <Text style={styles.dropdownItem}>10:00 AM</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTimeSelection('11:00 AM','start')}>
              <Text style={styles.dropdownItem}>11:00 AM</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTimeSelection('12:00 PM','start')}>
              <Text style={styles.dropdownItem}>12:00 PM</Text>
            </TouchableOpacity>
            {/* Add more times as needed */}
          </View>
        )}
      </View>
      </View>


      <View style={styles.inputContainer}>
        <Text style={{fontSize:17,marginBottom:22,marginTop:0,fontWeight:"500"}}>Select Closing Time of Shop</Text>
        <TouchableOpacity style={styles.cityDropdown} onPress={toggleEndTimeDropdown}>
          <Text>{endShopTime || 'Select Closing Time'}</Text>
        </TouchableOpacity>

        {endTimeDropdownVisible && (
          <View style={styles.dropdownList}>
            <TouchableOpacity onPress={() => handleTimeSelection('6:00 PM','end')}>
              <Text style={styles.dropdownItem}>6:00 PM</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTimeSelection('7:00 PM','end')}>
              <Text style={styles.dropdownItem}>7:00 PM</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTimeSelection('8:00 PM','end')}>
              <Text style={styles.dropdownItem}>8:00 PM</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTimeSelection('9:00 PM','end')}>
              <Text style={styles.dropdownItem}>9:00 PM</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTimeSelection('10:00 PM','end')}>
              <Text style={styles.dropdownItem}>10:00 PM</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTimeSelection('11:00 PM','end')}>
              <Text style={styles.dropdownItem}>11:00 PM</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTimeSelection('12:00 AM','end')}>
              <Text style={styles.dropdownItem}>12:00 AM</Text>
            </TouchableOpacity>
            {/* Add more times as needed */}
          </View>
        )}
      </View>
          

      <View style={styles.inputContainer}>
        <Text style={{fontSize:17,marginBottom:22,marginTop:10,fontWeight:"500"}}>Ticket Size</Text>
        
          <View style={{height:45,width:"45%",backgroundColor:"white",borderRadius:10,borderWidth:0.8,flexDirection:"row",alignItems:"center",alignContent:"center"}}>
            <Text style={{color:"black",fontSize:20,justifyContent:"center",fontWeight:"800",marginLeft:10}}>₹</Text>
            <TextInput placeholder='Enter Ticket size' style={{marginLeft:10,borderBottomWidth:0.2,borderColor:"grey"}}></TextInput>
          </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={{fontSize:17,marginBottom:22,marginTop:10,fontWeight:"500"}}>Select City</Text>
        <TouchableOpacity style={styles.cityDropdown} onPress={toggleCityDropdown}>
          <Text>{selectedCity || 'Select City'}</Text>
        </TouchableOpacity>

        {cityDropdownVisible && (
          <View style={styles.dropdownList}>
            <TouchableOpacity onPress={() => handleCitySelection('Delhi')}>
              <Text style={styles.dropdownItem}>Delhi</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCitySelection('Mumbai')}>
              <Text style={styles.dropdownItem}>Mumbai</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCitySelection('Bangalore')}>
              <Text style={styles.dropdownItem}>Bangalore</Text>
            </TouchableOpacity>
            {/* Add more cities as needed */}
          </View>
        )}
      </View>

      {/* Save Details Button */}
      <TouchableOpacity style={styles.button} onPress={handleSaveDetails}>
        <Text style={styles.buttonText}>Save Details</Text>
      </TouchableOpacity>
    </ScrollView>
    </FontLoader>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headblow: {
    fontSize: 15,
    fontFamily:"DMSansR"
  },
  heading: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 35,
    marginTop: 20,
    fontFamily:"DMSansR"
  },
  inputContainer: {
    marginBottom: 20,
    marginTop: 10,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    fontFamily:"DMSansR"
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 30,
  },
  timeInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeInput: {
    flex: 1,
  },
  timeSeparator: {
    fontSize: 20,
    marginHorizontal: 5,
    fontFamily:"DMSansR"
  },
  periodDropdown: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    flex:.5,
    justifyContent:"center",
    alignItems:"center",
    paddingLeft: 10,
    textAlign:"center",
    marginLeft:10
  },
  cityDropdown: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  dropdownList: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    position: 'absolute',
    width: '100%',
    backgroundColor: '#fff',
    zIndex: 1,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  button: {
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily:"DMSansR"
  },
});

export default ShopDetailstwo;
