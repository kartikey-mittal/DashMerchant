import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

const ShopDetails = () => {
  const [startHour, setStartHour] = useState('');
  const [startMinute, setStartMinute] = useState('');
  const [startPeriod, setStartPeriod] = useState('AM');

  const [endHour, setEndHour] = useState('');
  const [endMinute, setEndMinute] = useState('');
  const [endPeriod, setEndPeriod] = useState('AM');

  const [ticketSize, setTicketSize] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [cityDropdownVisible, setCityDropdownVisible] = useState(false);

  const handleSaveDetails = () => {
    // Implement logic to save business details
    const startTime = `${startHour}:${startMinute} ${startPeriod}`;
    const endTime = `${endHour}:${endMinute} ${endPeriod}`;

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

  const handleCitySelection = (city) => {
    setSelectedCity(city);
    toggleCityDropdown();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Enter Shop Details</Text>

      <View style={styles.inputContainer}>
      <Text style={{fontSize:18,marginBottom:22,marginTop:10,fontWeight:"500"}}>Select Time</Text>
        <Text style={styles.label}>Start Time</Text>
        <View style={styles.timeInputContainer}>
          <TextInput
            style={[styles.input, styles.timeInput]}
            placeholder="HH"
            keyboardType="numeric"
            value={startHour}
            onChangeText={(text) => setStartHour(text)}
          />
          <Text style={styles.timeSeparator}>:</Text>
          <TextInput
            style={[styles.input, styles.timeInput]}
            placeholder="MM"
            keyboardType="numeric"
            value={startMinute}
            onChangeText={(text) => setStartMinute(text)}
          />
          
          <TouchableOpacity
            style={[
              styles.periodDropdown,
              { backgroundColor: startPeriod === 'PM' ? 'black' : 'white' },
            ]}
            onPress={() => setStartPeriod(startPeriod === 'AM' ? 'PM' : 'AM')}
          >
            <Text style={{ color: startPeriod === 'PM' ? 'white' : 'black' }}>{startPeriod}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputContainer}>
      
        <Text style={styles.label}>End Time</Text>
        <View style={styles.timeInputContainer}>
          <TextInput
            style={[styles.input, styles.timeInput]}
            placeholder="HH"
            keyboardType="numeric"
            value={endHour}
            onChangeText={(text) => setEndHour(text)}
          />
          <Text style={styles.timeSeparator}>:</Text>
          <TextInput
            style={[styles.input, styles.timeInput]}
            placeholder="MM"
            keyboardType="numeric"
            value={endMinute}
            onChangeText={(text) => setEndMinute(text)}
          />
          <TouchableOpacity
            style={[
              styles.periodDropdown,
              { backgroundColor: endPeriod === 'PM' ? 'black' : 'white' },
            ]}
            onPress={() => setEndPeriod(endPeriod === 'AM' ? 'PM' : 'AM')}
          >
            <Text style={{ color: endPeriod === 'PM' ? 'white' : 'black' }}>{endPeriod}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={{fontSize:18,marginBottom:22,marginTop:10,fontWeight:"500"}}>Ticket Size</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter ticket size"
          keyboardType="numeric"
          value={ticketSize}
          onChangeText={(text) => setTicketSize(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={{fontSize:18,marginBottom:22,marginTop:10,fontWeight:"500"}}>Select City</Text>
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
  },
  heading: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 35,
    marginTop: 30,
  },
  inputContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
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
    marginTop: 5,
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
  },
});

export default ShopDetails;
