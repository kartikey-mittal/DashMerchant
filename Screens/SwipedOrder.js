        import React, { useRef, useState, useEffect } from 'react';
        import { View, Animated, PanResponder, Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';

        const ScreenWidth = Dimensions.get('window').width;
        const RectangleWidth = ScreenWidth - 40; // Adjust the width as needed
        const Threshold = RectangleWidth * 0.2; // 30% of the rectangle's width

        const SwipedOrder = () => {
        const [orderStatus, setOrderStatus] = useState(null); // Initially null
        const position = useRef(new Animated.ValueXY()).current;

        const panResponder = useRef(
        PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (e, gesture) => {
                position.setValue({ x: gesture.dx, y: 0 });
                // Determine order status based on gesture direction
                if (gesture.dx > Threshold) {
                setOrderStatus('Order Accepted');
                } else if (gesture.dx < -Threshold) {
                setOrderStatus('Order Declined');
                } else {
                setOrderStatus(null); // Reset order status if not swiped enough
                }
        },
        onPanResponderRelease: (e, gesture) => {
                // Determine if the circle has crossed the acceptance threshold
                if (gesture.dx > Threshold) {
                Animated.spring(position, {
                toValue: { x: RectangleWidth - 25, y: 0 }, // Shift to the right end of the rectangle
                useNativeDriver: false,
                }).start(() => {
                setOrderStatus('Order Accepted');
                console.log('Order Accepted');
                });
                }
                // Determine if the circle has crossed the decline threshold
                else if (gesture.dx < -Threshold) {
                Animated.spring(position, {
                toValue: { x: -RectangleWidth + 25, y: 0 }, // Shift to the left end of the rectangle
                useNativeDriver: false,
                }).start(() => {
                setOrderStatus('Order Declined');
                console.log('Order Declined');
                });
                } else {
                // Reset order status and animate the circle to the center
                Animated.spring(position, {
                toValue: { x: 0, y: 0 },
                useNativeDriver: false,
                }).start(() => {
                setOrderStatus(null);
                });
                }
        },
        })
        ).current;

        return (
        <View style={styles.container}>
        <View style={styles.rectangle}>
                <TouchableOpacity style={[styles.button,styles.decline, { left: 0 }]} onPress={() => setOrderStatus('Order Declined')}>
                <Text style={[styles.buttonText]}>Decline</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button,styles.accept, { right: 0 }]} onPress={() => setOrderStatus('Order Accepted')}>
                <Text style={[styles.buttonText]}>Accept</Text>
                </TouchableOpacity>
                <Animated.View
                style={[styles.circle, { transform: [{ translateX: position.x }, { translateY: position.y }] }]}
                {...panResponder.panHandlers}
                />
                {orderStatus && (
                <Text style={styles.text}>{orderStatus}</Text>
                )}
        </View>
        </View>
        );
        };

        const styles = StyleSheet.create({
        container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        },
        rectangle: {
        width: RectangleWidth,
        height: 70,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        position: 'relative', // Required for absolute positioning of text
        },
        circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'black',
        position: 'absolute',
        left: '50%',
        marginLeft: -25,
        top: '50%',
        marginTop: -25,
        },
        button: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
        height: '100%',
        backgroundColor: 'blue',
        },
        buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        },
        accept:{backgroundColor:"#56DA69"},
        decline:{backgroundColor:"#FF323C"},
        text: {
        position: 'absolute',
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        },
        });

        export default SwipedOrder;
