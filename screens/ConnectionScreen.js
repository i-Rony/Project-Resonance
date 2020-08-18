import React, { useEffect } from 'react';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { View, Text, TouchableOpacity, BackHandler } from 'react-native';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';


const ConnectionScreen = ({ navigation }) => {

    const handleBackButton = () => {
        navigation.navigate('Home');
        return true;
    }

    useEffect(() => {

        navigation.addListener('focus', () => {
            BackHandler.addEventListener('hardwareBackPress', handleBackButton)
        })

        navigation.addListener('blur', () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
        })
    });

    var isDrawerOpen = useIsDrawerOpen();

    function onSwipeLeft(gestureState) {
        navigation.navigate('Home');
    }

    function onSwipeRight(gestureState) {
        if (isDrawerOpen) {
            navigation.navigate('Notifications')
        }
        else {
            navigation.openDrawer();
        }
    }

    function onSwipe(gestureName, gestureState) {
        const { SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;

        switch (gestureName) {
            case SWIPE_LEFT:
                navigation.navigate('Home');
                break;
            case SWIPE_RIGHT: {
                if (isDrawerOpen) {
                    navigation.navigate('Notifications')
                }
                else {
                    navigation.openDrawer();
                }
            }
                break;
        }
    }

    let [fontsLoaded] = useFonts({
        'Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        'SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
        'Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
        'Light': require('../assets/fonts/Montserrat-Light.ttf'),
        'Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;

    } else {

        const config = {
            velocityThreshold: 0.5,
            directionalOffsetThreshold: 800
        };
        
        return (
            <GestureRecognizer
                onSwipe={(direction, state) => onSwipe(direction, state)}
                onSwipeLeft={(state) => onSwipeLeft(state)}
                onSwipeRight={(state) => onSwipeRight(state)}
                config={config}
                style={{
                    flex: 1,
                    backgroundColor: 'rgba(255,255,255,0)'
                }}
            >
                <View
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        flex: 1
                    }}
                >
                    <TouchableOpacity
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Text>
                            Connections
                    </Text>
                    </TouchableOpacity>
                </View>
            </GestureRecognizer>
        )
    }
}

export default ConnectionScreen;