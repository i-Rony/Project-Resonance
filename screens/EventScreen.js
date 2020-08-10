import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, BackHandler, Alert, ToastAndroid, Platform, StyleSheet, SafeAreaView } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import Card from '../Components/Card';
import { EventScreenHeader } from '../Components/Headers';
import Carousel_EventScreen from '../Components/Carousel_EventScreen';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { ScrollView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';



const HomeScreen = ({ navigation }) => {

    const [filters_status, setFilterStatus] = useState([true, false, false, false, false]);

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


    var filtersInfo = {
        All: {
            isActive: filters_status[0]
        },
        Events: {
            isActive: filters_status[1]
        },
        Trending: {
            isActive: filters_status[2]
        },
        Collabs: {
            isActive: filters_status[3]
        },
        People: {
            isActive: filters_status[4]
        }
    }

    if (
        filtersInfo['Events'].isActive === false &&
        filtersInfo['Trending'].isActive === false &&
        filtersInfo['Collabs'].isActive === false &&
        filtersInfo['People'].isActive === false
    ) {

        filtersInfo['All'].isActive = true;
    }

    const filterActiveColor = 'rgba(138,173,213,1)';
    const filterInactiveColor = 'rgba(255,255,255,1)';

    for (filter in filtersInfo) {

        if (filtersInfo[filter].isActive === true) {
            filtersInfo[filter].borderWidth = 1.5;
            filtersInfo[filter].textColor = filterActiveColor;
        }
        else {
            filtersInfo[filter].borderWidth = 0;
            filtersInfo[filter].textColor = filterInactiveColor;
        }
    }


    const filters =
        <View style={{ height: 50 }}>
            <ScrollView
                style={{ flexDirection: 'row' }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <TouchableOpacity
                    style={[styles.filters, { borderWidth: filtersInfo['All'].borderWidth }]}
                    onPress={() => setFilterStatus([true, false, false, false, false])}
                >
                    <Text style={{ color: filtersInfo['All'].textColor, fontSize: 15 }}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.filters, { borderWidth: filtersInfo['Events'].borderWidth }]}
                    onPress={() => {
                        setFilterStatus([false, !filters_status[1], filters_status[2], filters_status[3], filters_status[4]]);
                    }}
                >
                    <Text style={{ color: filtersInfo['Events'].textColor, fontSize: 15 }}>Events</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.filters, { borderWidth: filtersInfo['Trending'].borderWidth }]}
                    onPress={() => {
                        setFilterStatus([false, filters_status[1], !filters_status[2], filters_status[3], filters_status[4]]);
                    }}
                >
                    <Text style={{ color: filtersInfo['Trending'].textColor, fontSize: 15 }}>Trending</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.filters, { borderWidth: filtersInfo['Collabs'].borderWidth }]}
                    onPress={() => {
                        setFilterStatus([false, filters_status[1], filters_status[2], !filters_status[3], filters_status[4]]);
                    }}
                >
                    <Text style={{ color: filtersInfo['Collabs'].textColor, fontSize: 15 }}>Collabs</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.filters, { borderWidth: filtersInfo['People'].borderWidth }]}
                    onPress={() => {
                        setFilterStatus([false, filters_status[1], filters_status[2], filters_status[3], !filters_status[4]]);
                    }}
                >
                    <Text style={{ color: filtersInfo['People'].textColor, fontSize: 15 }}>People</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>


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

                            {filters}

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

export default HomeScreen;

const styles = StyleSheet.create({

    filters: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(206,191,203,1)', // 'rgba(44,54,63,0.5)', 
        borderRadius: 20,
        borderColor: 'rgba(138,173,213,1)',
        padding: 18,
        margin: 6
    }
});