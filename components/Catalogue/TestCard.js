import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontLoader from '../../FontLoader';

const TestCard = ({
    productimg,
    productName,
    productWeight,
    originalPrice,
    discountedPrice,
    productid,
    variants,
    onAddClick,
    quantity,
    handleIncrement,
    handleDecrement,
    storeData, 
    onEditClick, // New prop for handling edit button click
    stock
  }) => {
    const [selectedVariantId, setSelectedVariantId] = useState(variants[0].variantId);
    const [localQuantity, setLocalQuantity] = useState(quantity);
    const stockIndicatorColor = stock === '0' ? '#e54836' : '#08a36d'; 

    useEffect(() => {
      setLocalQuantity(quantity);
    }, [quantity]);
  
    useEffect(() => {
      storeData();
    }, [localQuantity]);
  
    const handleVariantChange = (variantId) => {
      setSelectedVariantId(variantId);
      setLocalQuantity(quantity);
    };
  
    const handleAddClick = () => {
      handleIncrement(`${productid}-${selectedVariantId}`);
      setLocalQuantity(1);
    };
  
    const handleIncrementClick = () => {
      handleIncrement(`${productid}-${selectedVariantId}`);
    };
  
    const handleDecrementClick = () => {
      if (localQuantity > 1) {
        handleDecrement(`${productid}-${selectedVariantId}`);
      } else {
        handleDecrement(`${productid}-${selectedVariantId}`);
      }
    };
  
    const renderCounterButtons = () => (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={handleDecrementClick} style={{ padding: 1, backgroundColor: '#F4F6F7', paddingHorizontal: 2 }}>
          <MaterialIcons name="remove" size={22} color="#212F3D" />
        </TouchableOpacity>
        <Text style={{ fontSize: 16, marginHorizontal: 5, fontFamily: "DMSansB", paddingHorizontal: 5, textAlign: 'center', textAlignVertical: 'center', alignSelf: 'center' }}>{localQuantity}</Text>
        <TouchableOpacity onPress={handleIncrementClick} style={{ padding: 1, backgroundColor: '#F4F6F7', paddingHorizontal: 2 }}>
          <MaterialIcons name="add" size={22} color="#212F3D" />
        </TouchableOpacity>
      </View>
    );
  
    return (
      <FontLoader>
        <View style={{ height: 7 }}></View>
        <View style={styles.cardContainer}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: productimg }} style={styles.productImage} />
          </View>
          <View style={styles.productInfoContainer}>
            <Text style={styles.productName}>{productName}</Text>
            {/* <Text style={{height:0}}>{stock}</Text> */}
            <View style={styles.productDetailsContainer}>
              <View style={styles.productWeightContainer}>
                <Text style={styles.productWeightText}>{productWeight}</Text>
                {variants.length > 1 && (
                  <TouchableOpacity onPress={() => onAddClick(variants)}>
                    <MaterialIcons name="keyboard-arrow-down" size={20} color="#000" />
                  </TouchableOpacity>
                )}
              </View>
              <View style={styles.addButtonContainer}>
                {localQuantity === 0 ? (
                  <>
                  <TouchableOpacity 
                  onPress={() => onEditClick(variants)}  // Pass variants to the function
                  style={styles.addButton}
                >
                    <Text style={styles.addButtonText}>EDIT</Text>
                  </TouchableOpacity>
                
                  </>
                ) : (
                  <View style={styles.counterButtonsContainer}>
                    {renderCounterButtons()}
                  </View>
                )}
              </View>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.discountedPrice}>₹{discountedPrice}</Text>
              <Text style={styles.originalPrice}>₹{originalPrice}</Text>
              <View style={{flex:1}}></View>
              <View style={{backgroundColor:stockIndicatorColor,height:15,width:15,borderRadius:100,alignSelf:'center',marginRight:20,borderColor:"#fce29a",borderWidth:0.7}}></View>
            </View>
          </View>
        </View>
      </FontLoader>
    );
  };
const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 5,
    marginHorizontal: 8,
    marginVertical: 1,
    borderColor: '#030a11',
    borderWidth: 0.2,
  },
  imageContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    width: '24%',
    height: 90,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',borderColor:"#e6e9fb",borderWidth:0.9,borderRadius:5,padding:5,marginTop:2,marginBottom:2
  },
  productImage: {
    width: '100%',
    height: '100%',
    backgroundColor:'transparent',
    resizeMode: 'contain',
    borderWidth: 2,
    borderRadius:10
  },
  productInfoContainer: {
    flex: 1,
    marginLeft: 10
  },
  productName: {
    backgroundColor:'transparent',
    fontSize: 15,

    fontFamily: "DMSansR",
    height:'full',
    flex:1,
    display:'flex',
    marginTop:2,
    marginBottom:2
  },
  productDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:'red'
  
  },
  productWeightContainer: {
    marginLeft:0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F6F7',
    borderColor:'black',
    borderWidth:0.2,
    borderRadius:1,
    paddingHorizontal:5,
    marginTop:3,
    // alignItems:'flex-end',
   
    marginBottom:5,paddingVertical:0
  },
  productWeightText: {
    fontSize: 16,
    color: 'black',
    height:27,
    paddingHorizontal: 5,
    fontFamily: "DMSansR",
 
    alignSelf:'center',
    textAlignVertical:'center'
    
  },
  addButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor:'transparent',
    marginRight:5
  },
  addButton: {
    borderRadius: 5,
    padding: 4,
    alignItems: 'center',
    justifyContent: "center",

    borderColor: '#000125',
    borderWidth: 1,
    paddingHorizontal:20
  },
  addButtonTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  addButtonText: {
    color: '#000125',
    fontSize: 14,
    fontFamily: "DMSansB"
  },
  counterButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: "#00356a",
    // paddingHorizontal: 10,
    // paddingVertical: 2,
    borderRadius: 3,
    marginRight:10,
    position: "absolute",
    overflow: 'hidden',
    
    
  },
  priceContainer: {
    flexDirection: 'row',
   backgroundColor:'transparent',
    marginTop: 2,
    display:'flex'
  },
  discountedPrice: {
    fontSize: 16,
    color: '#212121',
    marginTop: 2,
    fontFamily: "DMSansSB",
    backgroundColor:'transparent',
    marginLeft:2
  },
  originalPrice: {
    fontSize: 14,
    color: '#a2a2a5',
    textDecorationLine: 'line-through',
    marginTop: 2,
    marginLeft: 2,
    fontFamily: "DMSansR",
    alignSelf:'flex-end'
  }
});

export default TestCard;
