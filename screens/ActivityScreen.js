import React, { useEffect } from 'react';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { View, Text, TouchableOpacity, BackHandler, SafeAreaView } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import { ActivityScreenHeader } from '../Components/Headers';
import Constants from 'expo-constants';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

const ActivityScreen = ({ navigation }) => {

    const data = [
        { title: '09:00 Today', description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. '},
        { title: '10:45 Yesterday', description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.' },
        { title: '14:00 September 2nd 2020', description: 'Team sport played between two teams of eleven players with a spherical ball.'},
        { title: '12:00 September 2nd 2020', description: 'Look out for the Best Gym & Fitness Centers around me :)' },
        { title: '16:30 August 29th 2020', description: 'Commented \'henlo man\' on @WilburSmith\'s post' },
        
        { title: '09:00 Today', description: 'Event 1 description'},
        { title: '10:45 Yesterday', description: 'Event 2 description' },
        { title: '14:00 September 2nd 2020', description: 'Event 3 description'},
        { title: '12:00 September 2nd 2020', description: 'Event 4 description' },
        { title: '16:30 August 29th 2020', description: 'Event 5 description' },
        { title: '09:00 Today', description: 'Event 1 description'},
        { title: '10:45 Yesterday', description: 'Event 2 description' },
        { title: '14:00 September 2nd 2020', description: 'Event 3 description'},
        { title: '12:00 September 2nd 2020', description: 'Event 4 description' },
        { title: '16:30 August 29th 2020', description: 'Event 5 description' }
    ];

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
                <SafeAreaView style={{ marginTop: Constants.statusBarHeight, flex: 1 }}>
                    <ActivityScreenHeader />
                    <Timeline
                        data={data}                        
                        style={{flex: 1, marginLeft: 8, marginRight: 18}}                        
                        eventContainerStyle={{paddingBottom: 12}}
                        descriptionStyle={{fontFamily: 'Regular', fontSize: 18, color: 'rgba(44, 54, 63, 0.834)'}}
                        titleStyle={{ fontFamily: 'Light', fontWeight: 'normal', fontSize: 12, marginTop: -13, color: 'rgba(44, 54, 63, 0.68)', marginBottom: -10}}
                        showTime={false}
                        lineColor='rgba(231, 90, 124, 0.4)'
                        circleColor='rgba(231, 90, 124, 0.9)'
                        onEventPress={() => console.log("Event pressed !")}
                    />
                </SafeAreaView>
            </GestureRecognizer>
        );
    }
}

export default ActivityScreen;