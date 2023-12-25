import React from 'react';
import { View } from 'react-native';

import { SafeAreaView, StatusBar, Dimensions } from 'react-native';
// import { useState } from 'react';
import NavBarCatalogue from '../components/Catalogue/NavBarCatalogue';

import SearchBarCatalogue from '../components/Catalogue/SearchBarCatalogue';
import CatalogueCategory from '../components/Catalogue/CatalogueCategory';

import CatalogueItemCard from '../components/Catalogue/CatalogueItemCard';
import FontLoader from '../FontLoader';
const { width } = Dimensions.get('window');


const items = [
    {
      title: 'Chocolate',
      price: 'Rs 40',
      discountPrice: 'Rs 50',
      image: 'https://www.freepngimg.com/thumb/grocery/53973-6-grocery-free-hq-image.png',
      weight:'5KG'
    },
    {
      title: 'Candy',
      price: 'Rs 20',
      discountPrice: 'Rs 25',
      image: 'https://www.freepngimg.com/thumb/grocery/53973-6-grocery-free-hq-image.png',
      weight:'5KG'
    },
    // Add more items here
  ];

const StoreScreen = () => {
    // const [selectedCategory, setSelectedCategory] = useState(null);
    return (
      <FontLoader>
        <SafeAreaView style={{ flex: 1,backgroundColor:'#f2f2f2' }}>
            <StatusBar backgroundColor="#131927" barStyle="light-content" />
            
            <NavBarCatalogue storeName="Bigbasket" />
            <SearchBarCatalogue/>
            <CatalogueCategory/>

            {items.map((item, index) => (
        <CatalogueItemCard
          key={index}
          title={item.title}
          price={item.price}
          discountPrice={item.discountPrice}
          image={item.image}
          weight={item.weight}
        />
        
      ))}
            

            {/* Rest of your screen components go here */}
        </SafeAreaView>
        </FontLoader>
    );
};

export default StoreScreen;
