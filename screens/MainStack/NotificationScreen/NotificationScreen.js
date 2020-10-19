import React, { useEffect } from 'react';
import { BackHandler, SafeAreaView, FlatList } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
// import { FlatList } from 'react-native-gesture-handler';
import { NotificationScreenHeader } from '../Components/Headers';
import NotificationCard from '../Components/NotificationCard';
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
        navigation.navigate('Explore');
    }

    function onSwipe(gestureName, gestureState) {
        const { SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;

        switch (gestureName) {
            case SWIPE_LEFT:
                navigation.navigate('User');
                break;
            case SWIPE_RIGHT:
                navigation.navigate('Explore');
                break;
        }
    }

    const config = {
        velocityThreshold: 0.5,
        directionalOffsetThreshold: 800
    };

    const dummyNotifications = [
        {
            id: 1,
            data: "Opportunity revealed: Crystal Meth"
        },
        {
            id: 2,
            data: "Walter Jr. wants breakfast, as usual"
        },
        {
            id: 3,
            data: 'Pinkman: "Where\'s my money, BITCH ?!"',
        },
        {
            id: 4,
            data: "Skylar fucked Ted",
        },
        {
            id: 5,
            data: "I am the one who knocks",
        },
        {
            id: 6,
            data: "Gustavo burned.",
        },
        {
            id: 7,
            data: "Pinkman talking to cops",
        },
        {
            id: 8,
            data: "I watched Jane die",
        }
    ];

    const renderNotifications = ({ item }) => {
        console.log(item);
        return (<NotificationCard notif={item} />);
    }

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
                <FlatList
                    data={dummyNotifications}
                    renderItem={renderNotifications}
                    keyExtractor={(item) => item.id}
                />
            </SafeAreaView>
        </GestureRecognizer>
    );
}


export default NotificationScreen;