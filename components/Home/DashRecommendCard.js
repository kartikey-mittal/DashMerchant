import React from 'react';
import { View, Text, TouchableOpacity ,Image} from 'react-native';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontLoader from '../../FontLoader';

const DashRecommendCard = ({ iconName, backgroundColor, title }) => {
    return (
        <FontLoader>
        <TouchableOpacity>
            <View style={{ borderRadius: 10, backgroundColor: backgroundColor, height: 200, width: 370, margin: 5, elevation: 5 }}>
                {/* First Row */}
                <View style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flex: 0.95, flexDirection: 'column', justifyContent: 'center' }}>
                        <Text style={{ marginLeft: 10, textAlignVertical: 'center', color: 'white',fontFamily:"DMSansR" }}>{title}</Text>
                        <View style={{ marginLeft: 10, marginTop: 5, width: 40, backgroundColor: '#574f4f', height: 1 }}></View>

                    </View>
                    <Icon name={iconName} style={{ textAlignVertical: 'center', fontSize: 35, color: 'white', marginRight: 1 ,transform: [{ rotate: '45deg' }]}}></Icon>

                </View>
                {/* Second Row */}
                <View style={{ flex: 0.5, flexDirection: 'row', alignItems: 'center', marginBottom: 2 ,display:"flex",justifyContent:"space-around",flexDirection:"row",marginTop:15}}>
                    
                    <View style={{backgroundColor:"white",height:140,width:130,borderRadius:15,display:"flex",alignItems:"center",justifyContent:"center",marginTop:10}}>
                                        <Image
                                source={{ uri: 'https://www.pngmart.com/files/5/Red-Bull-PNG-File.png' }}
                                style={{width:80,height:80}}
                                
                        />
                        <Text style={{color:"blue",fontSize:12,marginTop:3}}>Red Bull Can - 100 ML</Text>
                        <View style={{display:"flex",flexDirection:"row",marginTop:5}}>
                                <Text style={{fontSize:13,textDecorationLine:"line-through"}}>160/-</Text>
                                <Text style={{paddingLeft:5,fontSize:16}}>150/-</Text>
                        </View>
                    </View>

                    <View style={{backgroundColor:"white",height:140,width:130,borderRadius:15,display:"flex",alignItems:"center",justifyContent:"center",marginTop:10}}>
                                        <Image
                                source={{ uri: 'https://www.pngmart.com/files/5/Red-Bull-PNG-File.png' }}
                                style={{width:80,height:80}}
                                
                        />
                        <Text style={{color:"blue",fontSize:12,marginTop:3}}>Red Bull Can - 100 ML</Text>
                        <View style={{display:"flex",flexDirection:"row",marginTop:5}}>
                                <Text style={{fontSize:13,textDecorationLine:"line-through"}}>160/-</Text>
                                <Text style={{paddingLeft:5,fontSize:16}}>150/-</Text>
                        </View>
                    </View>

                </View>
                

            </View >
        </TouchableOpacity>
        </FontLoader>
    )
}

export default DashRecommendCard;