import React, { useEffect } from 'react';
import { View, Text, BackHandler, Alert, ToastAndroid, Platform, SafeAreaView } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import Card from '../../../Components/Card';
import HomeScreenHeader from './Header';
import { HomeScreenFilters } from '../../../Components/Filters';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { ScrollView } from 'react-native-gesture-handler';
import JohnDoe from '../../../assets/kawaii.jpg';
import CardMusiq from '../../../Components/CardMusiq';
import PostCard from '../../../Components/PostCard';

const HomeScreen = ({ navigation }) => {
    
    const handleBackButton = () => {
        Alert.alert(
            'Exit App ?',
            '', [{
                text: 'Cancel',
                style: 'cancel'
            }, {
                text: 'OK',
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
                }
            }],
            {
                cancelable: false
            }
        );
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
        'Bold': require('../../../assets/fonts/Montserrat-Bold.ttf'),
        'SemiBold': require('../../../assets/fonts/Montserrat-SemiBold.ttf'),
        'Medium': require('../../../assets/fonts/Montserrat-Medium.ttf'),
        'Light': require('../../../assets/fonts/Montserrat-Light.ttf'),
        'Regular': require('../../../assets/fonts/Montserrat-Regular.ttf'),
    });

    function onSwipeLeft(gestureState) {
        navigation.navigate('Explore');
    }

    function onSwipeRight(gestureState) {
        navigation.navigate('User');
    }

    function onSwipe(gestureName, gestureState) {
        const { SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;

        switch (gestureName) {
            case SWIPE_LEFT:
                navigation.navigate('Explore');
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
                    // backgroundColor: 'rgba(231, 90, 124, 0.15)'
                }}
            >
                <View
                    style={{
                        flex: 1,
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

                            <HomeScreenHeader navigation={navigation}/>

                            <HomeScreenFilters />

                            {/* <Card source={MovingEarth} /> */}
                                
                            <PostCard source={'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'} userPhoto={JohnDoe} userName='Chika Fujiwara' userLocation='Tokyo, Japan'/>

                            <CardMusiq>
                                <Text>
                                    Coffee Cup - Chill Edit
                                </Text>
                            </CardMusiq>                            

                            <PostCard source={'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'} userPhoto={JohnDoe} userName='Chika Fujiwara' userLocation='Tokyo, Japan'/>
                            
                        </View>
                    </ScrollView>
                </View>
            </GestureRecognizer>
        );
    }
}

export default HomeScreen;