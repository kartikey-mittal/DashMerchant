import React from 'react';
import { View, StyleSheet, Text ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FontLoader from '../../FontLoader';

const OrderCard = () => {
    const orderID = 1202580;
    const text = orderID.toString();
    return (
        <FontLoader>
        <View
            style={{
                backgroundColor: 'white',
                height: 210,
                margin: 15,
                borderRadius: 10,
                borderWidth: 0.4,
                borderColor: '#ead0d0',
                elevation: 2,
                
            }}>
            {/* First Row */}
            <View
                style={{
                    flex: 0.2,
                    // backgroundColor: 'red',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                <Text style={{ marginLeft: 10, fontWeight: '500', fontSize: 18 ,fontFamily:"DMSansR"}}>
                    #OD{text.slice(0, -4)}
                    <Text style={{ backgroundColor: 'yellow', fontWeight: '800', fontSize: 18 ,fontFamily:"DMSansR"}}>{text.slice(-4)}</Text>
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                        name="shopping-bag"
                        style={{
                            textAlignVertical: 'center',
                            marginRight: 5,
                            fontSize: 20,
                            color: '#131972',

                        }}></Icon>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 25, marginRight: 10 ,fontFamily:"DMSansR"}}>
                        3
                    </Text>
                </View>
            </View>
            <View style={{ backgroundColor: '#ead0d0', height: 1.5, width: '100%' }}></View>
            {/* Second Row */}
            <View style={{ flex: 0.6, flexDirection: 'row' }}>
                <View style={{ flex: .8, }} >
                    <View style={{ width: '100%', flex: 1, flexDirection: 'row' }}>
                        <Icon
                            name="navigation"
                            style={{
                                textAlignVertical: 'center',
                                marginRight: 5,
                                fontSize: 15,
                                color: '#615f5f',
                                marginLeft: 5
                            }} />
                        <View style={{ justifyContent: 'center', flex: 1 }}>
                            <Text style={{ fontWeight: '700', fontSize: 15 ,fontFamily:"DMSansR"}}>Aviral Saxena</Text>
                            <Text style={{ fontSize: 15, color: '#565454' ,fontFamily:"DMSansR"}}>D-343,Singh Colony,Rudrapur</Text>
                        </View>
                    </View>
                    {/* phone no */}
                    <View style={{ width: '100%', flexDirection: 'row' }}>
                        <Icon
                            name="phone"
                            style={{
                                textAlignVertical: 'center',
                                marginRight: 5,
                                fontSize: 17,
                                color: '#615f5f',
                                marginLeft: 5
                            }} />
                        <View style={{}}>
                            <Text style={{ textDecorationLine: 'underline', color: '#565454' ,fontFamily:"DMSansR"}}> +91 8980579845</Text>

                        </View>
                    </View>
                    {/* Date */}
                    <View style={{ width: '100%', flexDirection: 'row', padding: 4 }}>
                        <Icon
                            name="calendar"
                            style={{
                                textAlignVertical: 'center',
                                marginRight: 5,
                                fontSize: 17,
                                color: '#615f5f',
                                marginLeft: 5
                            }} />
                        <View style={{}}>
                            <Text style={{ color: '#565454' ,fontFamily:"DMSansR"}}>Sat 12,Oct 2023 | 12:00PM  </Text>

                        </View>
                    </View>

                </View>
                <View style={{
                    backgroundColor: '#ead0d0', width: 2, height: '70%', alignSelf: 'center', marginRight: 10
                }}></View>

                <View style={{ flex: .3, justifyContent: 'center', alignItems: 'center' }} >
                    <View
                        style={{
                            flex: 0.4,

                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginTop: 10
                        }}>
                        <Icon
                            name="credit-card"
                            style={{
                                textAlignVertical: 'center',
                                marginRight: 5,
                                fontSize: 17,
                                color: '#615f5f',
                            }} />
                        <Text style={{ fontSize: 10, marginRight: 10, color: '#565454',fontFamily:"DMSansR" }}>Order Amount</Text>
                    </View>
                    <Text style={{ color: '#66be84', fontWeight: '900', fontSize: 30, textAlign: 'center' ,fontFamily:"DMSansR"}}>₹ 85</Text>
                </View>


            </View>

            {/* Third Row */}

            <View style={{ flex: 0.2, borderTopColor: '#ead0d0', borderTopWidth: 1, marginTop: 5, justifyContent: 'center', alignContent: 'center' }}>

                <TouchableOpacity style={{ borderColor: '#ead0d0', flex: 0.75, width: '95%', alignSelf: 'center', borderWidth: 1, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#3a3737' ,fontFamily:"DMSansR"}}>View More</Text>
                </TouchableOpacity>
                
            </View>

        </View >
        </FontLoader>
    );
};

export default OrderCard;
