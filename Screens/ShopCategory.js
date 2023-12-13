import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

const ShopCategory = () => {
  const categories = [
    { id: 1, title: 'Groceries', image: 'https://img.freepik.com/free-photo/basket-full-vegetables_1112-316.jpg?w=900&t=st=1702494837~exp=1702495437~hmac=9f93f0a93433114767f417491e575776642d0e65b8a36bc87a3d5a57b66b3fcf' },
    { id: 2, title: 'Dairies', image: 'https://img.freepik.com/free-photo/dairy-products_114579-8756.jpg?w=360&t=st=1702494866~exp=1702495466~hmac=c3a709a1d6fac0fc7b8a2d7e5a74d2fc1c419ea2d29ba7348abd54a0939b5e26' },
    { id: 3, title: 'Meat & Fish Shop', image: 'https://img.freepik.com/free-photo/top-view-real-food-pyramid_23-2150238929.jpg?w=360&t=st=1702494904~exp=1702495504~hmac=86a3670e5f9a3adecab8ca82a72bac8b3eb21026226e748b80a6a4aa99825971' },
    { id: 4, title: 'Bakeries', image: 'https://img.freepik.com/premium-photo/piece-cake-with-chocolate-sauce-raspberries-top_81048-4823.jpg?w=360' },
    { id: 5, title: 'Fruits & Vegetables Shop', image: 'https://img.freepik.com/premium-photo/collection-vegetables-isolated-white-background_44074-1573.jpg?w=996' },
    { id: 6, title: 'Cosmetics Shop', image: 'https://img.freepik.com/free-photo/close-up-collection-make-up-beauty-products_23-2148620012.jpg?w=900&t=st=1702495002~exp=1702495602~hmac=316e665b5dff8576f99028e653c28c407b5f63eecba043cebe5c517d5b8e6ec6' },
    { id: 7, title: 'Launderers', image: 'https://img.freepik.com/free-photo/clothes-laundry-wooden-basket-isolated-white-background_93675-131975.jpg?w=740&t=st=1702495036~exp=1702495636~hmac=130205137193c172bfda46c9c0c49ab5a19fea10147d32cd4f259c7ff56e07dd' },
    { id: 8, title: 'Pharmacies', image: 'https://img.freepik.com/free-photo/woman-working-pharmacy-wearing-coat_1303-26271.jpg?t=st=1702495053~exp=1702495653~hmac=82414b9d4fe8815b8a69bab825a33dd138da2c07a4422066439660ed33bccb56' },
    { id: 9, title: 'Restraunts', image: 'https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?t=st=1702495112~exp=1702495712~hmac=fc12e786d4b2b4251437cefa35ddb6d816ed630b7dd5fb2788d0433398f2cc3b' },
    { id: 10, title: 'Stationeries', image: 'https://img.freepik.com/premium-photo/pile-copybooks-stationery-isolated-white_185193-8960.jpg?w=996' },
    { id: 11, title: 'Sweets & Farsan Shop', image: 'https://img.freepik.com/free-photo/tasty-indian-dessert-plate-flat-lay_23-2149312386.jpg?w=360&t=st=1702495162~exp=1702495762~hmac=dfbd75a62064c9fe6722dbbc3a6cf4e32a5c7982018259f3498163797aa0443b' },
    { id: 12, title: 'Pet Supplies', image: 'https://img.freepik.com/free-photo/group-portrait-adorable-puppies_53876-64778.jpg?w=1380&t=st=1702495186~exp=1702495786~hmac=c27c85ea275cca319d1f9fc65e017811ecf939b6a03184f23a34805e74ff0f5a' },
    { id: 13, title: 'Dry Fruits & Nuts', image: 'https://img.freepik.com/free-photo/healthy-assortment-dry-fruits-top-view_114579-8437.jpg?w=996&t=st=1702495210~exp=1702495810~hmac=25c7708fd76da3baa7c6681c4e5a46e1b96b48e0442bdb3efe57f5e816856170' },
    // Add more categories as needed
  ];

  return (
    <View>
      <Text style={styles.heading}>Select Shop Category</Text>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.gridContainer}>
          {categories.map((category) => (
            <TouchableOpacity key={category.id} style={styles.categoryItem}>
              <Image source={{ uri: category.image }} style={styles.categoryImage} />
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
    marginBottom:20
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 34,
    marginLeft: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: -5, // Add this line to reduce padding
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
    backgroundColor: '#040D12',
    color: '#fff',
    textAlign: 'center',
  },
});


export default ShopCategory;
