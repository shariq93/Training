import { useState, useRef, useEffect } from 'react';
import { View, Animated, TouchableOpacity, Text, Easing, Button } from 'react-native';



export default function Home() {






    const translate = useRef(new Animated.Value(0)).current
    const scale = translate.interpolate({
        inputRange: [0, 100],
        outputRange: [1, 1.5]
    })
    const opacity = translate.interpolate({
        inputRange: [0, 100],
        outputRange: [1, 0.7]
    })
    const radius = translate.interpolate({
        inputRange: [0, 100],
        outputRange: [7, 50]
    })


    const moveObject = (isReverse) => {
        Animated.timing(translate, {
            toValue: isReverse?0:200,
            duration: 500,
            useNativeDriver: false,
            easing: Easing.linear
        }).start()

    }
   



    return (
        <View style={{
            paddingTop: 100,
            alignItems: 'center',
            flex: 1,
        }}>

            <Button
                title='Forward'
                onPress={() => {
                    moveObject(false)
                }}
            />
            <Button
                title='Back'
                onPress={() => {
                    moveObject(true)
                }}
            />
            <Animated.View
                style={{
                    opacity,
                    width: 100, height: 100, borderRadius: radius, backgroundColor: '#333',
                    transform: [{ translateY: translate }, { scale }]
                }}>


            </Animated.View>


        </View>
    );
}


