import React, { useEffect } from 'react';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { View, Text, TouchableOpacity, BackHandler, ScrollView } from 'react-native';
import CollabCard from '../../../../Components/CollabCard';
import Constants from 'expo-constants';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import CollabScreenHeader from './Header';


const CollabScreen = ({ navigation }) => {

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
        'Bold': require('../../../../assets/fonts/Montserrat-Bold.ttf'),
        'SemiBold': require('../../../../assets/fonts/Montserrat-SemiBold.ttf'),
        'Medium': require('../../../../assets/fonts/Montserrat-Medium.ttf'),
        'Light': require('../../../../assets/fonts/Montserrat-Light.ttf'),
        'Regular': require('../../../../assets/fonts/Montserrat-Regular.ttf'),
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
                    marginTop: Constants.statusBarHeight,
                    backgroundColor: 'white',
                }}
            >
                <CollabScreenHeader />
                <ScrollView 
                    contentContainerStyle={{paddingVertical: 12, marginTop: -30}}
                >
                    <CollabCard 
                        id={1}
                        navigation={navigation}
                        name='レルエ－火花'
                        color1='#94D0FF'
                        color2='#FF6AC4'
                        poster='https://source.unsplash.com/daily'
                        // users={[]}
                    />
                    <CollabCard 
                        id={2}
                        navigation={navigation}
                        name='Summertime Sadness'
                        color1='#EB2527'
                        color2='#FFE652'
                        poster='https://picsum.photos/id/951/4472/2803'
                        // users={[]}
                    />
                    <CollabCard 
                        id={3}
                        navigation={navigation}
                        name='Cigarettes After Sex'
                        color1='#0A0F10'
                        color2='#F1F2EE'
                        poster='https://picsum.photos/id/497/4896/2760'
                        // users={[]}
                    />

                    <CollabCard 
                        id={1}
                        navigation={navigation}
                        name='レルエ－火花'
                        color1='#94D0FF'
                        color2='#FF6AC4'
                        poster='https://source.unsplash.com/daily'
                        // users={[]}
                    />
                    <CollabCard 
                        id={2}
                        navigation={navigation}
                        name='Summertime Sadness'
                        color1='#EB2527'
                        color2='#FFE652'
                        poster='https://picsum.photos/id/951/4472/2803'
                        // users={[]}
                    />
                    <CollabCard 
                        id={3}
                        navigation={navigation}
                        name='Cigarettes After Sex'
                        color1='#0A0F10'
                        color2='#F1F2EE'
                        poster='https://picsum.photos/id/497/4896/2760'
                        // users={[]}
                    />
                </ScrollView>
                    
                
            </GestureRecognizer>
        )
    }
}

export default CollabScreen;