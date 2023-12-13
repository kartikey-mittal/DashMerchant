// ShopCategory.js

import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

const ShopCategory = () => {
  const categories = [
    { id: 1, title: 'Groceries', image: require('../assets/cat1.jpeg') },
    { id: 2, title: 'Dairies', image: require('../assets/cat2.jpeg') },
    { id: 3, title: 'Meat & Fish Shop', image: require('../assets/cat3.jpg') },
    { id: 4, title: 'Bakeries', image: require('../assets/cat4.webp') },
    { id: 5, title: 'Fruits & Vegetables Shop', image: require('../assets/cat5.webp') },
    { id: 6, title: 'Cosmetics Shop', image: require('../assets/cat6.webp') },
    { id: 7, title: 'Launderers', image: require('../assets/cat7.jpg') },
    { id: 8, title: 'Pharmacies', image: require('../assets/cat8.jpg') },
    { id: 9, title: 'Restraunts', image: require('../assets/cat9.webp') },
    { id: 10, title: 'Stationeries', image: require('../assets/cat10.webp') },
    { id: 11, title: 'Sweets & Farsan Shop', image: require('../assets/cat11.jpeg') },
    { id: 12, title: 'Pet Supplies', image: require('../assets/cat12.jpg') },
    { id: 13, title: 'Dry Fruits & Nuts', image: require('../assets/cat13.jpeg') },
    // Add more categories as needed
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Select Shop Category</Text>
      <View style={styles.gridContainer}>
        {categories.map((category) => (
          <TouchableOpacity key={category.id} style={styles.categoryItem}>
            <Image source={category.image} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>{category.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop:25
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: '48%',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  categoryImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  categoryTitle: {
    fontSize: 16,
    padding: 10,
    backgroundColor: '#007bff',
    color: '#fff',
    textAlign: 'center',
  },
});

export default ShopCategory;
