import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { View, FlatList, ActivityIndicator, SafeAreaView, StatusBar, TouchableOpacity, Text, StyleSheet,Image ,Modal,TextInput,Alert} from 'react-native';
import { Client, Databases, Query } from 'appwrite';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavBarCatalogue from '../components/Catalogue/NavBarCatalogue';

import StoreCategory from '../components/Catalogue/StoreCategory';
import TestCard from '../components/Catalogue/TestCard';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchBarCatalogue from '../components/Catalogue/SearchBarCatalogue';
const StoreScreen1 = ({ route }) => {
  
//   const { storeid, storename } = route.params;

const storeid ='200';
const storename='BigBasket';
const [showModal, setShowModal] = useState(true); // Initially show the modal
const [dataFetched, setDataFetched] = useState(false);
  const [items, setItems] = useState([]);
  const [newPrice, setNewPrice] = useState('');

  const [selectedProductMRP, setSelectedProductMRP] = useState(0); // Initialize with 0 or appropriate default value

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const sheetRef = useRef(null);
  const editSheetRef = useRef(null);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedVariants, setSelectedVariants] = useState([]);
  const [variantQuantities, setVariantQuantities] = useState({});
  const [selectedVariantDetails, setSelectedVariantDetails] = useState({});

  const snapPoints = useMemo(() => ['35%', '35%','35%'], []);
  const snapPoints1 = useMemo(() => ['42%'], []);

  const client = new Client();
  client.setEndpoint('https://cloud.appwrite.io/v1');
  client.setProject('65773c8581b895f83d40');
  const databases = new Databases(client);


  const handleOpenEditSheet = useCallback((productId, selectedVariant) => {
    setSelectedProductId(productId);
    setSelectedVariantDetails(prevDetails => ({
      ...prevDetails,
      [productId]: selectedVariant, // Set the selected variant
    }));
    editSheetRef.current?.expand();
  }, []);



  const handleCloseSheet = () => {
    sheetRef.current?.close();
  };
  const handleCloseSheet1 = () => {
    setNewPrice('0');
    editSheetRef.current?.close();
    fetchData();
  };
  const handleOpenVariantSheet = useCallback((productId, variants) => {
    setSelectedProductId(productId);
    setSelectedVariants(variants);
    sheetRef.current?.expand();
  }, []);

  const saveDataToAsyncStorage = async (data) => {
    try {
      // Get existing data from AsyncStorage
      const existingData = await AsyncStorage.getItem('storeData');
      let storeData = existingData ? JSON.parse(existingData) : {};

      // Prepare the new data to be saved
      const newData = {
        storeid,
        storename,
        itemsdata: Object.entries(data || variantQuantities)
          .filter(([_, quantity]) => quantity > 0)
          .map(([key, quantity]) => {
            const [productId, variantId] = key.split('-');
            return { productid: productId, variantid: variantId, qty: quantity };
          }),
      };

      // Merge the new data with existing data
      storeData[storeid] = newData;

      // Save the updated data back to AsyncStorage
      await AsyncStorage.setItem('storeData', JSON.stringify(storeData));
      console.log('Data saved:', JSON.stringify(storeData, null, 2));
    } catch (error) {
      console.error('Error saving data to AsyncStorage:', error);
    }
  };

  const handleBuyVariant = useCallback((variant) => {
    setSelectedVariantDetails((prevDetails) => ({
      ...prevDetails,
      [selectedProductId]: {
        ...prevDetails[selectedProductId],
        ...variant,
      },
    }));
    setSelectedProductMRP(variant.mrp); // Set the MRP when variant is selected
    handleCloseSheet();
  }, [selectedProductId]);
  

  const handleIncrementVariant = (variantId) => {
    setVariantQuantities((prevQuantities) => {
      const newQuantities = {
        ...prevQuantities,
        [variantId]: (prevQuantities[variantId] || 0) + 1,
      };
      saveDataToAsyncStorage(newQuantities);
      return newQuantities;
    });
  };

  const handleDecrementVariant = (variantId) => {
    setVariantQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      if (newQuantities[variantId] > 0) {
        newQuantities[variantId] -= 1;
      }
      saveDataToAsyncStorage(newQuantities);
      return newQuantities;
    });
  };

  const fetchData = async () => {
    setShowModal(true); // Show modal when fetching starts
    const client = new Client();
    client.setEndpoint('https://cloud.appwrite.io/v1');
    client.setProject('65773c8581b895f83d40');

    const databases = new Databases(client);
    const collectionId = 'Shop_ItemsDB_testing';
    const productCollectionId = '664f1ca60037dad0be9c';

    try {
      const shopItemsResponse = await databases.listDocuments(
        'data-level-1',
        collectionId,
        [Query.search('SHOP_ID', storeid)]
      );

    
      const shopItems = shopItemsResponse.documents[0]['Shop_Items-SP'];
      const shopStocks = shopItemsResponse.documents[0]['Shop_Items-Stocks']; // Get stock data
      const productIds = shopItems.map((item) => item.split(':')[0].split('.')[0]);

      const productDetailsResponse = await databases.listDocuments('data-level-1', productCollectionId);
      const productDetails = productDetailsResponse.documents;

      const categoriesMap = {};
      productDetails.forEach((product) => {
        if (productIds.includes(product.ProductID.toString())) {
          if (!categoriesMap[product.Product_Category]) {
            categoriesMap[product.Product_Category] = product['Category-Image'];
          }
        }
      });

      const uniqueCategories = Object.keys(categoriesMap).map((category) => ({
        name: category,
        image: categoriesMap[category],
      }));

      setCategories(uniqueCategories);

      const combinedItems = shopItems.map((item) => {
        const [variantId, price] = item.split(':');
        const productId = variantId.split('.')[0];
        const variant = variantId.split('.')[1];
        const stockInfo = shopStocks.find((s) => 
          s.startsWith(`${productId}.${variant}:`) // Match with full variant ID
        );
        const stock = stockInfo ? stockInfo.split(':')[1] : '0'; 
        const product = productDetails.find((p) => p.ProductID.toString() === productId);
        const mrpInfo = product ? product['Product-MRP'].find((m) => m.startsWith(variantId)) : null;
        const weightInfo = product ? product['Product_ID-Weight'].find((w) => w.startsWith(variantId)) : null;
    
        const mrp = mrpInfo ? mrpInfo.split(':')[1] : 'N/A';
        const weight = weightInfo ? weightInfo.split(':')[1] : 'N/A';
       
      
        return {
          productId,
          variant,
          price,
          mrp, // Ensure MRP is included here
          weight,
          name: product ? product.Product_Name : 'Unknown Product',
          image: product ? product.Product_Image : '',
          category: product ? product.Product_Category : 'Unknown Category',
          stock: stock, 
          variants: shopItems
            .filter((i) => i.split(':')[0].split('.')[0] === productId)
            .map((v) => {
              const [varId, varPrice] = v.split(':');
              const varWeight = product['Product_ID-Weight'].find((w) => w.startsWith(varId));
              const varMrp = product['Product-MRP'].find((m) => m.startsWith(varId)); // Include MRP
              const varStockInfo = shopStocks.find((s) => 
                s.startsWith(`${productId}.${varId.split('.')[1]}:`) // Match with full variant ID
              );
              const varStock = varStockInfo ? varStockInfo.split(':')[1] : '0';
              return {
                variantId: varId.split('.')[1],
                price: varPrice,
                weight: varWeight ? varWeight.split(':')[1] : 'N/A',
                mrp: varMrp ? varMrp.split(':')[1] : 'N/A', // Include MRP
                stock: varStock,
              };
            }),
        };
      });
      
   
      const uniqueProducts = Object.values(
        combinedItems.reduce((acc, item) => {
          if (!acc[item.productId]) {
            acc[item.productId] = item;
          }
          return acc;
        }, {})
      );
      console.log(uniqueProducts);

      setItems(uniqueProducts);
      setLoading(false);
      setTimeout(() => {
        setShowModal(false);
        setDataFetched(true);
      }, 2000); 
    } catch (error) {
      console.error('Error fetching data:', error);
      setItems([]);
      setLoading(false);
      setShowModal(false); 
    }
  };

  useEffect(() => {
    fetchData();
  }, [storeid]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleAddClick = (productId) => {
    const selectedVariant = selectedVariantDetails[productId];
    if (selectedVariant) {
      handleIncrementVariant(`${productId}-${selectedVariant.variantId}`);
    }
  };


  const updateSellingPrice = async () => {
    try {
      const selectedProduct = selectedVariantDetails[selectedProductId];
      if (!selectedProduct) {
        Alert.alert('Error', 'No product variant selected.');
        return;
      }
  
      // Fetch the current document and extract the document ID
      const shopItemsResponse = await databases.listDocuments(
        'data-level-1',
        'Shop_ItemsDB_testing',
        [Query.equal('SHOP_ID', storeid)]
      );
  
      if (shopItemsResponse.documents.length === 0) {
        Alert.alert('Error', 'No document found.');
        return;
      }
  
      const docId = shopItemsResponse.documents[0].$id; 
  
      // Find the index of the item to update
      const itemToUpdateIndex = shopItemsResponse.documents[0]['Shop_Items-SP'].findIndex(
        (item) => item.startsWith(`${selectedProductId}.${selectedProduct.variantId}:`)
      );
  
      if (itemToUpdateIndex === -1) {
        Alert.alert('Error', 'Product variant not found in the store.');
        return;
      }
  
      // Update the price of the found item
      shopItemsResponse.documents[0]['Shop_Items-SP'][itemToUpdateIndex] = `${selectedProductId}.${selectedProduct.variantId}:${newPrice}`;
  
       // Update only the 'Shop_Items-SP' field in the document
      await databases.updateDocument('data-level-1','Shop_ItemsDB_testing', docId, {
        'Shop_Items-SP': shopItemsResponse.documents[0]['Shop_Items-SP'], 
      });
      handleCloseSheet1();
      Alert.alert('Success', 'Selling price updated successfully.');
      
    } catch (error) {
      console.error('Error updating selling price:', error);
      handleCloseSheet1();
      Alert.alert('Error', 'Failed to update selling price.');
      
    }
  };

// Function to validate document ID format
const isValidDocumentId = (docId) => {
  // Validate against the criteria: max length 36, alphanumeric + underscore, no leading underscore
  return /^[a-zA-Z0-9]{1}[a-zA-Z0-9_]{0,35}$/.test(docId);
};




  const filteredItems = selectedCategory
    ? items.filter((item) => item.category === selectedCategory)
    : items;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#000125" barStyle="light-content" />
     <NavBarCatalogue storeName='Bigbasket'/>
     <Modal 
        transparent={true} 
        animationType="fade"
        visible={showModal} 
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={styles.modalText}>Fetching Data...</Text>
          </View>
        </View>
      </Modal>
      <SearchBarCatalogue />
      
      
      
      <StoreCategory categories={categories} onSelectCategory={handleCategorySelect} />
      
      {dataFetched && ( 
      <View style={{ flex: 1,backgroundColor:'#f3f4f6' }}>
        {loading ? (
          <ActivityIndicator size="large" color="#c2c2c2" />
        ) : filteredItems.length === 0 ? (
          <Text>No items found</Text>
        ) : (
          <FlatList
            data={filteredItems}
            keyExtractor={(item) => item.productId}
            renderItem={({ item }) => {
              const selectedVariantId =
                selectedVariantDetails[item.productId]?.variantId || item.variants[0].variantId;
              const variantKey = `${item.productId}-${selectedVariantId}`;
              return (
                <TestCard
                  productid={item.productId}
                  productimg={item.image}
                  productName={item.name}
                  productWeight={
                    selectedVariantDetails[item.productId]?.weight || item.weight
                  }
                  originalPrice={
                    selectedVariantDetails[item.productId]?.mrp || item.mrp
                  }
                  discountedPrice={
                    selectedVariantDetails[item.productId]?.price || item.price
                  }
                  showDropdown={false}
                  variants={item.variants}
                  onAddClick={(variants) => handleOpenVariantSheet(item.productId, variants)}
                  onEditClick={() => {
                    const preSelectedVariantId = selectedVariantDetails[item.productId]?.variantId || item.variants[0].variantId;
                    const preSelectedVariant = item.variants.find(variant => variant.variantId === preSelectedVariantId);
                    handleOpenEditSheet(item.productId, preSelectedVariant); 
                  }}
                  quantity={variantQuantities[variantKey] || 0}
                  handleIncrement={() => handleIncrementVariant(variantKey)}
                  handleDecrement={() => handleDecrementVariant(variantKey)}
                  storeData={saveDataToAsyncStorage} // Pass the saveDataToAsyncStorage function to TestCard
                  stock={selectedVariantDetails[item.productId]?.stock || item.stock}
                />
              );
            }}
          />
        )}
      </View>
)}


      <BottomSheet
      ref={sheetRef}
      index={-1}
      snapPoints={snapPoints}
      onChange={(index) =>
        setSelectedProductId(index > -1 ? selectedProductId : null)
      }
      enablePanDownToClose={true}
      backgroundStyle={styles.bottomSheetBackground} // Apply the custom background style
      handleComponent={() =>
        <View style={styles.closeLineContainer}>
          <View style={styles.closeLine}></View>
        </View>
      }
    >
      <BottomSheetScrollView contentContainerStyle={{ padding: 20, }}>
        <Text style={{ fontSize: 18, marginBottom: 10,fontFamily:'DMSansSB',letterSpacing:-0.2,color:'#566573' }}>
          Select a variant:233
        </Text>
        {selectedVariants.map((variant) => (
          <TouchableOpacity
          key={variant.variantId}
          onPress={() => handleBuyVariant(variant)}
          style={styles.variantButton}
        >
          <View style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', alignItems: 'center',}}>
            <View style={{display:'flex',flexDirection:'row'}}>
              <Icon2
              name="weight"
              size={20}
              color='#566573'
              style={{ marginTop: 5, marginRight: 10 }}
            />
            <Text style={styles.variantText}>{`${variant.weight}`}</Text></View>
            <View style={{display:'flex',flexDirection:'column',}}>
            <Text style={styles.priceText}>{`  ₹ ${variant.price}`}</Text>
            <Text style={{...styles.priceText, textDecorationLine: 'line-through',color:'#8d8c90',fontSize:12,alignSelf:'center',marginRight:5}}>{`₹ ${variant.mrp}`}</Text></View>
          </View>
        </TouchableOpacity>
        ))}
      </BottomSheetScrollView>
    </BottomSheet>
    
    <BottomSheet
        ref={editSheetRef}
        index={-1}
        snapPoints={snapPoints1}
        onChange={(index) => setSelectedProductId(index > -1 ? selectedProductId : null)}
        enablePanDownToClose={true}
        backgroundStyle={styles.bottomSheetBackground}
        handleComponent={() => (
          <View style={styles.closeLineContainer}>
            <View style={styles.closeLine}></View>
          </View>
        )}
      >
        <BottomSheetScrollView contentContainerStyle={{ padding: 0, paddingBottom: 0, paddingHorizontal: 2, flex: 1 }}>
    <Text style={{ fontSize: 0 }}>Product Details:</Text>

    {selectedProductId && selectedVariantDetails[selectedProductId] && (
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
            {/* ----------------------------EDIT BOTTOMSHEET--------------- */}
            <View>
                <View style={{ flexDirection: "row", backgroundColor: 'transparent', paddingTop: 20 }}>
                    <Image
                        source={{ uri: items.find(item => item.productId === selectedProductId)?.image }}
                        style={{
                            width: '24%', height: 100, backgroundColor: '#f4f4f4', resizeMode: 'contain', borderColor: "#e6e9fb", borderWidth: 0.9, borderRadius: 10
                        }}
                    />
                    <View style={{ flexDirection: "column", marginLeft: 10, flex: 1, paddingRight: 3 }}>
                        <Text style={{
                            fontFamily: "DMSansSB", flexWrap: "wrap", letterSpacing: -0.2, fontSize: 15, color: "#212121"
                        }}>
                            {items.find(item => item.productId === selectedProductId)?.name}
                        </Text>
                        <View style={{
                            flexDirection: "row", justifyContent: "space-between", marginTop: 15
                        }}>
                            <View style={{}}>
                                <Text style={{
                                    fontFamily: "DMSansR", color: '#131315', paddingVertical: 5, paddingHorizontal: 10, backgroundColor: "#f5f6f8", alignItems: "center", justifyContent: "center", marginTop: 2, borderRadius: 2, borderColor: "#c3c3c3", borderWidth: 0.5
                                }}>
                                    {selectedVariantDetails[selectedProductId].weight}
                                </Text>
                            </View>
                            <View style={{
                                paddingVertical: 0, paddingHorizontal: 10, backgroundColor: "#f5f6f8", borderRadius: 4, borderColor: "c3c3c3", marginRight: 10, borderWidth: 0.2, display: 'flex', flexDirection: 'column', borderStyle: "dashed"
                            }}>
                                <Text style={{
                                    paddingHorizontal: 0, textAlign: "center", fontSize: 12, color: "#646464", fontFamily: "DMSansR", marginLeft: 0, alignSelf: 'center', marginBottom: 0, marginRight: 0
                                }}>
                                    MRP
                                </Text>
                                <Text style={{
                                    paddingHorizontal: 0, textAlign: "center", fontSize: 25, color: "#212121", fontFamily: "DMSansB", marginTop: 0
                                }}>
                                    ₹{selectedVariantDetails[selectedProductId].mrp}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{
                    flexDirection: "row", marginTop: 15, backgroundColor: "transparent", paddingVertical: 0, marginLeft: 8, marginRight: 8, gap: 20,marginTop:10
                }}>
                    <View style={{
                        width: '35%', paddingHorizontal: 5, backgroundColor: "#f7f7f7", paddingVertical: 0, borderRadius: 5, borderColor: "#c3c3c3", borderWidth: 0.5, marginLeft: 0, alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Text style={{ fontSize: 12, fontFamily: "DMSansR", color: '#5b5b5b' }}>Current Selling Price</Text>
                        <Text style={{ fontSize: 0, fontFamily: "DMSansR", color: '#5b5b5b' }}>Product ID: {selectedProductId}</Text>
                        <Text style={{ fontSize: 0, fontFamily: "DMSansR", color: '#5b5b5b' }}>Variant ID: {selectedVariantDetails[selectedProductId].variantId}</Text>
                        <Text style={{
                            fontSize: 20, color: "#1e1516", fontFamily: "DMSansSB", marginTop: 5, alignSelf: 'center'
                        }}>
                            ₹ {selectedVariantDetails[selectedProductId].price}
                        </Text>
                    </View>
                    <View style={{
                        width: '60%', backgroundColor: "#ebe9da", borderRadius: 5, borderWidth: 1, borderColor: '#4caf50', marginRight: 0, marginLeft: 5
                    }}>
                        <Text style={{
                            fontSize: 13, textAlign: "center", fontFamily: "DMSansR", color: '#646464', marginBottom: 0
                        }}>
                            New Price
                        </Text>
                        <View style={{
                            flexDirection: 'row', backgroundColor: '#ebe9da', borderRadius: 5, alignItems: 'center', paddingHorizontal: 10, alignItems: 'flex-start', justifyContent: 'flex-start'
                        }}>
                            <Text style={{
                                color: '#357a38', fontSize: 25, backgroundColor: '#ebe9da', padding: 0, fontFamily: 'DMSansSB', alignSelf: 'center', marginRight: 0
                            }}>
                                ₹
                            </Text>
                            <TextInput
  style={{
    backgroundColor: '#ebe9da',
    borderRadius: 5,
    padding: 0,
    fontFamily: 'DMSansSB',
    flex: 1,
    fontSize: 25,
    color: '#357a38',
    borderBottomColor: '#5b5b5b',
    borderBottomWidth: 1,
    marginBottom: 3,
    marginLeft: 10,
  }}
  // placeholder="Enter Price"
  placeholderTextColor="#8d8f93"
  keyboardType="numeric"
  value={newPrice.toString()} // Assuming newPrice is the state variable for this input
  onChangeText={(text) => {
    const parsedValue = parseFloat(text);
    if (!isNaN(parsedValue) && parsedValue > selectedVariantDetails[selectedProductId].mrp) {
      Alert.alert(
        'Invalid Price',
        'New price cannot be greater than MRP.',
        [
          {
            text: 'OK',
            onPress: () => {
              setNewPrice('0'); // Reset newPrice state to '0'
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      setNewPrice(text); // Update newPrice state based on valid input
    }
  }}
/>
                        </View>
                    </View>
                </View>
            </View>

            {/* Moved to the bottom */}
            <View style={{
                display: "flex", flexDirection: "row", justifyContent: "space-around", marginTop: 25, gap: 10, width: '100%', marginBottom: 5
            }}>
                <TouchableOpacity style={{
                    flex: 1, paddingVertical: 13, paddingHorizontal: 25, borderWidth: 1, borderColor: "#d41712", backgroundColor: "#fff", borderRadius: 5, alignItems: 'center'
                }} >
                    <Text style={{
                        color: "#d41712", fontFamily: "DMSansB", fontSize: 15
                    }}>
                        Out of Stock
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    flex: 1, paddingVertical: 13, paddingHorizontal: 50, borderWidth: 1, borderColor: "#65a3d9", backgroundColor: "#65a3d9", borderRadius: 5, alignItems: 'center'
                }} onPress={updateSellingPrice}>
                    <Text style={{
                        color: "#fff", fontFamily: "DMSansB", fontSize: 15
                    }}>
                        Update
                    </Text>
                </TouchableOpacity>
            </View>
            {/* ---------------------------- CLOSE EDIT BOTTOMSHEET--------------- */}
        </View>
    )}
</BottomSheetScrollView>

      </BottomSheet>
    


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  closeLineContainer: {
    alignSelf: 'center',
   
  },
  closeLine: {
    width: 40,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#00356a',
    marginTop: 9,
  },

  bottomSheetBackground: {
    backgroundColor: '#f9f9f9',
    // borderTopColor: '#f9f9f9',
    // borderTopWidth: 20,
    borderTopLeftRadius: 30, // Adjust the value to get the desired curve
    borderTopRightRadius: 30, // Adjust the value to get the desired curve
  },

  variantButton: {
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    marginBottom: 10,
    display: 'flex',
    backgroundColor:"#f6f7f9" ,
    paddingHorizontal:10
  },
  variantText: {
    fontSize: 15,
    fontFamily: 'DMSansSB',
    marginTop: 2,
    height: 30,
  },
  priceText: {
    fontSize: 16,
    color: "green",
    fontFamily: 'DMSansSB',
    marginRight:10
  },
  itemImage: {
    width: 80, 
    height: 80, 
    marginRight: 10,
    borderRadius: 5, 
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black background
  
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    marginTop: 10, 
    fontSize: 16,fontFamily:'DMSansSB'
  },
});

export default StoreScreen1;
