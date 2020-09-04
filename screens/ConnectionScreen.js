import React, { useEffect } from 'react';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { SafeAreaView, View, ScrollView, BackHandler } from 'react-native';
import Constants from 'expo-constants';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

import { ConnectionScreenHeader } from '../Components/Headers';
import ConnectionCard from '../Components/ConnectionCard';
import { FlatList } from 'react-native-gesture-handler';


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

    const dummyConnections = [
        {
            id: 1,
            name: "Leah Gotti",
            statusInfo: { status: 1 },
            choice: ["acoustic guitar", "drums"]
        },
        {
            id: 2,
            name: "Mia Melone",
            statusInfo: { status: 1 },
            choice: ["violin"]
        },
        {
            id: 3,
            name: "Abella Danger",
            nickName: "dangerGirl69",
            statusInfo: { status: 2, date: "15 Feb, 2020" },
            choice: ["electric guitar"]
        },
        {
            id: 4,
            name: "Marsha May",
            statusInfo: { status: 0 },
            choice: ["keyboard"]
        },
        {
            id: 5,
            name: "Peta Jensen",
            nickName: "sexyKITTEN",
            statusInfo: { status: 1 },
            choice: ["voice"]
        },
        {
            id: 6,
            name: "Ava Dalush",
            nickName: "brit_chick",
            statusInfo: { status: 1 },
            choice: ["piano"]
        },
        {
            id: 7,
            name: "Mia Malkova",
            statusInfo: { status: 1 },
            choice: ["flute", "moaning"]
        },
        {
            id: 8,
            name: "Sofia Curly",
            nickName: "CUMpasta",
            statusInfo: { status: 1 },
            choice: ["saxophone"]
        }
    ];

    const renderConnections = ({ item }) => {
        console.log(item);
        return (<ConnectionCard conInfo={item} />);
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
                <SafeAreaView
                    style={{
                        flex: 1,
                        marginTop: Constants.statusBarHeight,
                    }}
                >
                    {/* <ScrollView style={{
                        flex: 1,
                        // marginTop: Constants.statusBarHeight,
                    }}> */}
                        <ConnectionScreenHeader navigation={navigation} />
                        <FlatList
                            data={dummyConnections}
                            renderItem={renderConnections}
                            keyExtractor={(item) => item.id}
                            // style={{
                            //     alignItems: "center",
                            //     justifyContent: "center",
                            //     flex: 1
                            // }}
                        />
                    {/* </ScrollView> */}
                </SafeAreaView>
            </GestureRecognizer>
        );
    }
}

export default ConnectionScreen;