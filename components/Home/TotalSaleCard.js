import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontLoader from '../../FontLoader';

const TotalSaleCard = ({ iconName, backgroundColor, title, iconNametwo }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Today');

  const handleDropdownPress = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    setDropdownVisible(false);
    // Add any logic you want when an option is selected
  };

  return (
    <FontLoader>
      <View style={{ borderRadius: 10, backgroundColor: backgroundColor, height: 140, width: 350, margin: 5, elevation: 5 }}>
        {/* First Row */}
        <View style={{ flex: 0.4, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flex: 0.95, flexDirection: 'column', justifyContent: 'center' }}>
            <Text style={{ marginLeft: 10, textAlignVertical: 'center', color: 'white', fontFamily: "DMSansR" }}>{title}</Text>
            <View style={{ marginLeft: 10, marginTop: 5, width: 40, backgroundColor: '#574f4f', height: 1 }}></View>
          </View>
          <Icon name={iconName} style={{ textAlignVertical: 'center', fontSize: 35, color: 'white', marginRight: 1 }}></Icon>
        </View>

        {/* Second Row */}
        <View style={{ flex: 0.35, flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <TouchableOpacity onPress={handleDropdownPress} style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ textAlign: 'center', textAlignVertical: 'center', marginRight: 10, marginLeft: 20, fontSize: 18, fontWeight: 800, color: "white", fontFamily: "DMSansR" }}>{selectedOption}</Text>
            <Icon name='arrow-down-drop-circle-outline' style={{ fontSize: 18, color: "white", marginTop: 5 }}></Icon>
          </TouchableOpacity>
        </View>

        {/* Dropdown */}
        <Modal
          animationType="none"
          transparent={true}
          visible={isDropdownVisible}
          onRequestClose={() => {
            setDropdownVisible(!isDropdownVisible);
          }}
        >
          <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 155 ,marginLeft:80}}>
            <View style={{ width: 200, backgroundColor: '#332941', padding: 10, borderRadius: 10, elevation: 5}}>
              <Pressable onPress={() => handleOptionPress('Today')}>
                <Text style={{fontSize:18,color:"white"}}>Today</Text>
              </Pressable>
              <Pressable onPress={() => handleOptionPress('Last Week')}>
                <Text style={{fontSize:18,color:"white"}}>Last Week</Text>
              </Pressable>
              <Pressable onPress={() => handleOptionPress('Last Month')}>
                <Text style={{fontSize:18,color:"white"}}>Last Month</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        {/* Third Row */}
        <View style={{ flex: 0.5, flexDirection: 'row', alignItems: 'center', marginBottom: 10, justifyContent: "space-between" }}>
          <Text style={{ textAlign: 'center', textAlignVertical: 'center', marginRight: 15, marginLeft: 20, fontSize: 35, fontWeight: 800, color: "white", fontFamily: "DMSansR" }}>₹ 3/-</Text>
          <View style={{ flex: 0.6, backgroundColor: "white", height: 50, borderRadius: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginRight: 20, paddingHorizontal: 5 }}>
            <Icon name={iconNametwo} style={{ fontSize: 35, color: 'black', marginRight: 6 }}></Icon>
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Text style={{ fontSize: 16, fontWeight: "600" }}>23 %</Text>
              <Text style={{ fontSize: 13 }}>last month</Text>
            </View>
          </View>
        </View>
      </View>
    </FontLoader>
  );
};

export default TotalSaleCard;
