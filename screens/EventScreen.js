import React, { useEffect } from 'react';
import { View, Text, BackHandler, SafeAreaView, Dimensions } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import EventPoster from '../Components/EventPoster';
import EventPopularPoster from '../Components/EventPopularPoster';
import { EventScreenHeader } from '../Components/Headers';
import { EventScreenFilters } from '../Components/Filters';
import CarouselEventScreen from '../Components/Carousel_EventScreen';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

import StairwayToHeaven from '../assets/Heaven.png';
import SailorMoon from '../assets/sailormoon.png';
import DaftPunk from '../assets/daftpunk.jpg';
import City from '../assets/city.png';
import Lofi from '../assets/lofi.jpg';
import Arcade from '../assets/Arcade.jpg';

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
                    <ScrollView>
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <EventScreenHeader />
                            <CarouselEventScreen
                                images={[
                                    'https://picsum.photos/id/334/2304/1536',
                                    'https://picsum.photos/id/249/3000/2000',
                                    'https://picsum.photos/id/39/3456/2304',
                                    'https://picsum.photos/id/460/4476/2984'
                                ]} 
                            />
                            <EventScreenFilters />
                            {/* {filters} */}                          

                        </View>

                        <View style={{ backgroundColor: 'rgba(231, 90, 124, 0.15)' }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Text
                                    style={{
                                        top: height*0.03,
                                        left: width*0.04,
                                        fontFamily: 'Regular',
                                        fontSize: 18,
                                        color: 'rgba(44, 54, 63, 0.834)'
                                    }}
                                >
                                    Popular
                                </Text>
                                <Text 
                                    style={{
                                        top: height*0.03,
                                        left: -56,
                                        fontFamily: 'SemiBold',
                                        fontSize: 18,
                                        color: 'rgba(44, 54, 63, 0.834)'
                                    }}
                                >
                                    Events
                                </Text>
                                <TouchableOpacity
                                    style={{
                                        top: 18,
                                        right: 10,                                        
                                        borderRadius: 16,
                                        backgroundColor: 'rgba(255,255,255,0.4)',
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontFamily: 'Light',
                                            color: 'rgba(44, 54, 63, 0.834)',
                                            padding: 7
                                        }}
                                    >
                                        Show All
                                    </Text>
                                </TouchableOpacity>

                            </View>

                            <View>
                                <ScrollView
                                    horizontal={true}
                                    contentContainerStyle={{
                                        paddingHorizontal: 3,
                                        paddingBottom: 20
                                    }}
                                >
                                    <EventPopularPoster 
                                        source={City} 
                                        name='Folklore - Taylor Swift'
                                        venue='Club Devil, 5th Avenue, 287' 
                                        date='Sun 23, August'   
                                    />

                                    <EventPopularPoster 
                                        source={Lofi} 
                                        name='Lofi Chillout Sessions'
                                        venue='Atlanta City, Fiasco Street' 
                                        date='Thu 27, August'   
                                    />

                                    <EventPopularPoster 
                                        source={Arcade} 
                                        name='Game-Boy Wonder Club'
                                        venue='Saint De Boulevard Road' 
                                        date='Mon 31, August'   
                                    />
                                </ScrollView>
                            </View>                           
                        </View>

                        <View style={{ backgroundColor: 'rgba(231, 90, 124, 0.15)' }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Text
                                    style={{
                                        top: height*0.03,
                                        left: width*0.05,
                                        fontFamily: 'Regular',
                                        fontSize: 18,
                                        color: 'rgba(44, 54, 63, 0.834)'
                                    }}
                                >
                                    Nearby
                                </Text>
                                <Text 
                                    style={{
                                        top: height*0.03,
                                        left: -45,
                                        fontFamily: 'SemiBold',
                                        fontSize: 18,
                                        color: 'rgba(44, 54, 63, 0.834)'
                                    }}
                                >
                                    Concerts
                                </Text>
                                <TouchableOpacity
                                    style={{
                                        top: 18,
                                        right: 10,                                        
                                        borderRadius: 16,
                                        backgroundColor: 'rgba(255,255,255,0.4)',
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontFamily: 'Light',
                                            color: 'rgba(44, 54, 63, 0.834)',
                                            padding: 7
                                        }}
                                    >
                                        Show All
                                    </Text>
                                </TouchableOpacity>

                            </View>

                            <View>
                                <ScrollView
                                    horizontal={true}
                                    contentContainerStyle={{
                                        paddingHorizontal: 3,
                                        paddingBottom: 20
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

                    </ScrollView>
                </SafeAreaView>
            </GestureRecognizer>
        );
    }
}

export default EventScreen;