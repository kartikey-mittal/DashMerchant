import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
 
const ShopCategory = () => {
  const categories = [
    { id: 1, title: 'Groceries', image: 'https://ahrefs.com/blog/wp-content/uploads/2021/05/backlinks.png' },
    { id: 2, title: 'Dairies',image: 'https://ahrefs.com/blog/wp-content/uploads/2021/05/backlinks.png' },
    { id: 3, title: 'Meat & Fish Shop', image: 'https://ahrefs.com/blog/wp-content/uploads/2021/05/backlinks.png' },
    { id: 4, title: 'Bakeries',image: 'https://ahrefs.com/blog/wp-content/uploads/2021/05/backlinks.png' },

    { id: 5, title: 'Fruits & Vegetables Shop', image: 'https://ahrefs.com/blog/wp-content/uploads/2021/05/backlinks.png' },
    { id: 6, title: 'Cosmetics Shop', image: 'https://ahrefs.com/blog/wp-content/uploads/2021/05/backlinks.png' },
    { id: 7, title: 'Launderers', image: 'https://ahrefs.com/blog/wp-content/uploads/2021/05/backlinks.png' },
    { id: 8, title: 'Pharmacies',image: 'https://ahrefs.com/blog/wp-content/uploads/2021/05/backlinks.png' },
    { id: 9, title: 'Restraunts', image: 'https://ahrefs.com/blog/wp-content/uploads/2021/05/backlinks.png' },
    { id: 10, title: 'Stationeries', image: 'https://ahrefs.com/blog/wp-content/uploads/2021/05/backlinks.png'},
    { id: 11, title: 'Sweets & Farsan Shop',image: 'https://ahrefs.com/blog/wp-content/uploads/2021/05/backlinks.png' },
    { id: 12, title: 'Pet Supplies', image: 'https://ahrefs.com/blog/wp-content/uploads/2021/05/backlinks.png' },
    { id: 13, title: 'Dry Fruits & Nuts', image: 'https://ahrefs.com/blog/wp-content/uploads/2021/05/backlinks.png' },
    // Add more categories as needed
  ];
 
  return (
    <View>
    
      <Text style={styles.heading}>Select Shop Category</Text>
      <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.gridContainer}>
        {categories.map((category) => (
          <TouchableOpacity key={category.id} style={styles.categoryItem}>
            <Image source={category.image} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>{category.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
    </View>
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