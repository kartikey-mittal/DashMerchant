import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontLoader from '../../FontLoader';
import NavBar from './NavBar';

const TotalSaleCard = ({ iconName, backgroundColor, title ,iconNametwo}) => {
    return (
        <FontLoader>
                
        <TouchableOpacity>
            <View style={{ borderRadius: 10, backgroundColor: backgroundColor, height: 140, width: 350, margin: 5, elevation: 5 }}>
                {/* First Row */}
                <View style={{ flex: 0.4, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flex: 0.95, flexDirection: 'column', justifyContent: 'center' }}>
                        <Text style={{ marginLeft: 10, textAlignVertical: 'center', color: 'white',fontFamily:"DMSansR" }}>{title}</Text>
                        <View style={{ marginLeft: 10, marginTop: 5, width: 40, backgroundColor: '#574f4f', height: 1 }}></View>

                    </View>
                    <Icon name={iconName} style={{ textAlignVertical: 'center', fontSize: 35, color: 'white', marginRight: 1}}></Icon>

                </View>

                {/* Second Row */}
                <View style={{ flex: 0.2, flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={{ textAlign: 'center', textAlignVertical: 'center', marginRight: 10, marginLeft: 20, fontSize: 18, fontWeight: 800, color: "white" ,fontFamily:"DMSansR"}}>Today</Text>
                        <Icon name='check'></Icon>
                    

                </View>

                {/* Second Row */}
                <View style={{ flex: 0.5, flexDirection: 'row', alignItems: 'center', marginBottom: 10 ,justifyContent:"space-between" }}>
                    <Text style={{ textAlign: 'center', textAlignVertical: 'center', marginRight: 15, marginLeft: 20, fontSize: 35, fontWeight: 800, color: "white" ,fontFamily:"DMSansR"}}>₹ 3/-</Text>

                  <View style={{flex: 0.5,backgroundColor:"white",width:80,height:60,borderRadius:10,flexDirection:"row",justifyContent:"space-around",alignItems:"center",marginRight:20,paddingHorizontal:10}}>
                  <Icon name={iconNametwo} style={{ fontSize: 35, color: 'black'}}></Icon>
                  <View style={{display:"flex",flexDirection:"column",margin:"auto"}}>
                        <Text style={{fontSize:18,fontWeight:"600"}}>23 %</Text>
                        <Text>last day</Text>

                  </View>
                  </View>

                </View>
               

               
            </View >
        </TouchableOpacity>
        </FontLoader>
    )
}

export default TotalSaleCard;