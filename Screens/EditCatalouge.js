import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import FontLoader from '../FontLoader';

const EditCatalouge = () => {
  const [Item, setItem] = useState('');
  const [mrp, setMRP] = useState('');
  const [sp, setSP] = useState('');
  const [weight, setWeight] = useState('');
  const [barcode, setBarcode] = useState('');



  const handleSubmit = () => {
    // Implement your submission logic here
  };

  const IMG_URI = "https://cdn.pixabay.com/photo/2020/05/26/15/42/eagle-5223559_960_720.jpg";

  return (
    <FontLoader>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <View style={styles.ovalImageContainer}>
            <Image source={{ uri: IMG_URI }} style={styles.ovalImage} />
          </View>
          
        </View>

        <Text style={styles.label}>Item</Text>
        <TextInput
          value={Item}
          onChangeText={(text) => setItem(text)}
          style={styles.input}
          placeholder='Enter your Item...'
        />

        <View style={styles.rowContainer}>
          <View style={styles.numericInputContainer}>
            <Text style={styles.label}>MRP</Text>
            <TextInput
              value={mrp}
              onChangeText={(text) => setMRP(text)}
              keyboardType="numeric"
              style={styles.input}
              placeholder='₹ Enter MRP of Item...'
            />
          </View>

          <View style={styles.numericInputContainer}>
            <Text style={styles.label}>SP</Text>
            <TextInput
              value={sp}
              onChangeText={(text) => setSP(text)}
              keyboardType="numeric"
              style={styles.input}
              placeholder='₹ Enter SP of Item...'
            />
          </View>
        </View>

        <Text style={styles.label}>Weight</Text>
        <TextInput
          value={weight}
          onChangeText={(text) => setWeight(text)}
          style={styles.input}
          placeholder='Enter Weight of Item...'
        />

        <Text style={styles.label}>Barcode</Text>
        <TextInput
          value={barcode}
          onChangeText={(text) => setBarcode(text)}
          style={styles.input}
          placeholder='Enter Barcode of Item...'
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </FontLoader>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor:"#f2f2f2"
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  ovalImageContainer: {
    width: 200,
    height: 200,
    overflow: 'hidden',
    borderRadius: 100,
    marginBottom: 10,
  },
  ovalImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 100,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 25,
    width: '100%',
    borderRadius: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%',
  },
  numericInputContainer: {
    flex: 1,
    marginRight: 10,
  },
  label: {
    fontFamily: 'DMSansSB',
    fontSize: 15,
    marginBottom: 5,
    
  },
  submitButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal:30,
    
    borderRadius: 15,
    marginTop: 20,
    alignSelf:"center"
  },
  submitButtonText: {
    color: '#fff',
    fontFamily: 'DMSansSB',
    fontSize: 15,
    textAlign:"center"
  },
});

export default EditCatalouge;
