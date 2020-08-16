import React, { useEffect } from 'react';
import { View, BackHandler, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { NotificationScreenHeader } from '../Components/Headers';
import Constants from 'expo-constants';


const NotificationScreen = ({ navigation }) => {

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

    function onSwipeLeft(gestureState) {
        navigation.navigate('User');
    }

    function onSwipeRight(gestureState) {
        navigation.navigate('Event');
    }

    function onSwipe(gestureName, gestureState) {
        const { SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;

        switch (gestureName) {
            case SWIPE_LEFT:
                navigation.navigate('User');
                break;
            case SWIPE_RIGHT:
                navigation.navigate('Event');
                break;
        }
    }

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
            <SafeAreaView
                    style={{
                        flex: 1,
                        marginTop: Constants.statusBarHeight,
                    }}
            >
                <NotificationScreenHeader />
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
                            Notifications
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </GestureRecognizer>
    );
}


export default NotificationScreen;