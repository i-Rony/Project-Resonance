import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, BackHandler, Alert, ToastAndroid, Platform } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';


const HomeScreen = ({ navigation }) => {

    const handleBackButton = () => {
        Alert.alert(
            'Exit App ?',
            '', [{
                text: 'Cancel',
                style: 'cancel'
            }, {
                text: 'OK',
                // onPress: () => BackHandler.exitApp()
                onPress: () => {
                    if (Platform.OS === 'android') {
                        ToastAndroid.show("We don't believe in 'good'-byes,\n\tHope to see you soon...", ToastAndroid.SHORT);
                        setTimeout(() => {
                            BackHandler.exitApp();
                        }, 1000);
                    }
                    else {
                        BackHandler.exitApp();
                    }
                }//end of onPress()
            }],
            {
                cancelable: false
            }
        );
        return true;
    }

    useEffect(() => {
        navigation.addListener('focus', () => {
            BackHandler.addEventListener('hardwareBackPress', handleBackButton);
        });
    });

    let [fontsLoaded] = useFonts({
        'Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        'SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
        'Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
        'Light': require('../assets/fonts/Montserrat-Light.ttf'),
        'Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    });

    function onSwipeLeft(gestureState) {
        navigation.navigate('Event');
    }

    function onSwipeRight(gestureState) {
        navigation.navigate('User');
    }

    function onSwipe(gestureName, gestureState) {
        const { SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;

        switch (gestureName) {
            case SWIPE_LEFT:
                navigation.navigate('Event');
                break;
            case SWIPE_RIGHT:
                navigation.navigate('User');
                break;
        }
    }

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
                            Hello
                    </Text>
                    </TouchableOpacity>
                </View>
            </GestureRecognizer>
        );
    }
}

export default HomeScreen;