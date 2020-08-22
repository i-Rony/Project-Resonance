import React, { useEffect } from 'react';
import { View, Text, BackHandler, Alert, ToastAndroid, Platform, SafeAreaView, Dimensions } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import Card from '../Components/Card';
import EventPoster from '../Components/EventPoster';
import { EventScreenHeader } from '../Components/Headers';
import { EventScreenFilters } from '../Components/Filters';
import Carousel_EventScreen from '../Components/Carousel_EventScreen';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { ScrollView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

import StairwayToHeaven from '../assets/Heaven.png';
import SailorMoon from '../assets/sailormoon.png';
import DaftPunk from '../assets/daftpunk.jpg';

const {width, height} = Dimensions.get("screen");

const EventScreen = ({ navigation }) => {
    
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

    let [fontsLoaded] = useFonts({
        'Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        'SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
        'Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
        'Light': require('../assets/fonts/Montserrat-Light.ttf'),
        'Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    });

    function onSwipeLeft(gestureState) {
        navigation.navigate('Notifications');
    }

    function onSwipeRight(gestureState) {
        navigation.navigate('Home');
    }

    function onSwipe(gestureName, gestureState) {
        const { SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;

        switch (gestureName) {
            case SWIPE_LEFT:
                navigation.navigate('Notifications');
                break;
            case SWIPE_RIGHT:
                navigation.navigate('Home');
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
                }}
            >
                <SafeAreaView
                    style={{
                        flex: 1,
                        marginTop: Constants.statusBarHeight,
                    }}
                >
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >

                        <EventScreenHeader />

                        {/* <Carousel_EventScreen
                            images={[
                                '../assets/1.png',
                                '../assets/2.png',
                                '../assets/3.png',
                                '../assets/4.png',
                                '../assets/5.png',
                                '../assets/6.png',
                                '../assets/kawaii.jpg'
                            ]} 
                        /> */}

                        <EventScreenFilters />
                        {/* {filters} */}
                        </View>

                        <View
                            style={{
                                backgroundColor: 'rgba(231, 90, 124, 0.2)',
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: 'row'
                                }}
                            >
                                <Text
                                    style={{
                                        top: height*0.03,
                                        left: width*0.05,
                                        fontFamily: 'Medium',
                                        fontSize: 16,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    Nearby Concerts
                                </Text>

                            </View>

                            <View>
                                <ScrollView
                                    horizontal={true}
                                    contentContainerStyle={{
                                        paddingHorizontal: 3
                                    }}
                                >
                                    <EventPoster source={StairwayToHeaven}>
                                        <Text>Stairway To Heaven - Concert Hall 79</Text>
                                    </EventPoster>

                                    <EventPoster source={SailorMoon}>
                                        <Text>Sailor Moon - Feature Film</Text>
                                    </EventPoster>

                                    <EventPoster source={DaftPunk}>
                                        <Text>Daft Punk - Live @ Wireless Festival</Text>
                                    </EventPoster>
                                </ScrollView>
                            </View>                           
                        </View>


                </SafeAreaView>
            </GestureRecognizer>
        );
    }
}

export default EventScreen;