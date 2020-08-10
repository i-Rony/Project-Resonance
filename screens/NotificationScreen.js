import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { NotificationScreenHeader } from '../Components/Headers';
import { SafeAreaView } from 'react-native-safe-area-context';

const NotificationScreen = ({ navigation }) => {

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
        </GestureRecognizer>
    );
}


export default NotificationScreen;