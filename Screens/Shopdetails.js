// ShopDetails.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ShopDetails = () => {
  const [shopName, setShopName] = useState('');
  const [shopCategory, setShopCategory] = useState('');
  const [shopPinCode, setShopPinCode] = useState('');
  const [whatsappNo, setWhatsappNo] = useState('');

  const handleSaveDetails = () => {
    // Implement logic to save business details
    // For now, let's just log the details to the console
    console.log('Shop Name:', shopName);
    console.log('Shop Category:', shopCategory);
    console.log('Shop Pin Code:', shopPinCode);
    console.log('WhatsApp No:', whatsappNo);
    console.log('Selected Document Type:', selectedDocumentType);
    console.log('Proof Image:', proofImage);
    // Add your logic to save the details or navigate to the next screen

    Alert.alert('Success', 'Details saved successfully!');
  };
          
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Enter Details</Text>
      <Text style={styles.headblow}>Provide business details to get you started</Text>
      <View style={styles.givinginputs}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Shop Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter shop name"
          value={shopName}
          onChangeText={(text) => setShopName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Shop Category</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter shop category"
          value={shopCategory}
          onChangeText={(text) => setShopCategory(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Shop Pin Code</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter shop pin code"
          keyboardType="numeric"
          value={shopPinCode}
          onChangeText={(text) => setShopPinCode(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>WhatsApp No</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter WhatsApp number"
          keyboardType="numeric"
          value={whatsappNo}
          onChangeText={(text) => setWhatsappNo(text)}
        />
        </View>
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
  headblow:{
        fontSize:15
  },
  heading: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop:30
  },
  inputContainer: {
    marginBottom: 20,
    marginTop:20
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  givinginputs:{
        marginTop:20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
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
