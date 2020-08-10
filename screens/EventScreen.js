import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, BackHandler, Alert, ToastAndroid, Platform, StyleSheet, SafeAreaView } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import Card from '../Components/Card';
import { EventScreenHeader } from '../Components/Headers';
import { EventScreenFilters } from '../Components/Filters';
import Carousel_EventScreen from '../Components/Carousel_EventScreen';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { ScrollView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';


const EventScreen = ({ navigation }) => {
    
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
                    backgroundColor: 'rgba(255,255,255,0)'
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
                                flex: 1
                            }}
                        >

                            <EventScreenHeader />

                            <Carousel_EventScreen
                                images={[
                                    '../assets/1.png',
                                    '../assets/2.png',
                                    '../assets/3.png',
                                    '../assets/4.png',
                                    '../assets/5.png',
                                    '../assets/6.png',
                                    '../assets/kawaii.jpg'
                                ]} 
                            />

                            <EventScreenFilters />
                            {/* {filters} */}

                            <Card>
                                <Text>
                                    Hello
                                </Text>
                            </Card>

                            <Card>
                                <Text>
                                    Hello
                                </Text>
                            </Card>

                            <Card>
                                <Text>
                                    Hello
                                </Text>
                            </Card>

                            <Card>
                                <Text>
                                    Hello
                                </Text>
                            </Card>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </GestureRecognizer>
        );
    }
}

export default EventScreen;