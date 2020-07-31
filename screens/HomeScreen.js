import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, BackHandler, Alert, ToastAndroid, Platform, StyleSheet } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { ScrollView } from 'react-native-gesture-handler';


const HomeScreen = ({ navigation }) => {

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
        navigation.navigate('Event');
    }

    function onSwipeRight(gestureState) {
        navigation.navigate('User');
    }

    function onSwipe(gestureName, gestureState) {
        const { SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;

        switch (gestureName) {
            case SWIPE_LEFT:
                navigation.navigate('Event');
                break;
            case SWIPE_RIGHT:
                navigation.navigate('User');
                break;
        }
    }

    const filterActiveColor = 'rgba(138,173,213,1)';
    const filterInactiveColor = 'rgba(255,255,255,1)';

    var filtersInfo = {
        All: {
            isActive: true,
            borderWidth: 1,
            textColor: filterActiveColor
        },
        Events: {
            isActive: false,
            borderWidth: 0,
            textColor: filterInactiveColor
        },
        JamSessions: {
            isActive: false,
            borderWidth: 0,
            textColor: filterInactiveColor
        },
        Collabs: {
            isActive: false,
            borderWidth: 0,
            textColor: filterInactiveColor
        },
        People: {
            isActive: false,
            borderWidth: 0,
            textColor: filterInactiveColor
        }
    }
    

    if (filtersInfo['All'].isActive == true) {

        for (filter in filtersInfo) {
            filtersInfo[filter].isActive = false;
        }

        filtersInfo['All'].isActive = true
        filtersInfo['All'].borderWidth = 1;
        filtersInfo['All'].textColor = filterActiveColor;

    }
    else {

        for (filter in filtersInfo) {

            if (filtersInfo[filter].isActive == true) {
                filtersInfo[filter].borderWidth = 1;
                filtersInfo[filter].textColor = filterActiveColor;
            }
            else {
                filtersInfo[filter].borderWidth = 0;
                filtersInfo[filter].textColor = filterInactiveColor;
            }
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
                    onPress={() => filtersInfo['All'].isActive = true}
                >
                    <Text style={{ color: filtersInfo['All'].textColor }}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.filters, { borderWidth: filtersInfo['Events'].borderWidth }]}
                    onPress={() => {
                        filtersInfo['All'].isActive = false;
                        filtersInfo['Events'].isActive = !filtersInfo['Events'].isActive;
                    }}
                >
                    <Text style={{ color: filtersInfo['Events'].textColor }}>Events</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.filters, { borderWidth: filtersInfo['JamSessions'].borderWidth }]}
                    onPress={() => {
                        filtersInfo['All'].isActive = false;
                        filtersInfo['JamSessions'].isActive = !filtersInfo['JamSessions'].isActive;
                    }}
                >
                    <Text style={{ color: filtersInfo['JamSessions'].textColor }}>Jam Sessions</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.filters, { borderWidth: filtersInfo['Collabs'].borderWidth }]}
                    onPress={() => {
                        filtersInfo['All'].isActive = false;
                        filtersInfo['Collabs'].isActive = !filtersInfo['Collabs'].isActive;
                    }}
                >
                    <Text style={{ color: filtersInfo['Collabs'].textColor }}>Collabs</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.filters, { borderWidth: filtersInfo['People'].borderWidth }]}
                    onPress={() => {
                        filtersInfo['All'].isActive = false;
                        filtersInfo['People'].isActive = !filtersInfo['People'].isActive;
                    }}
                >
                    <Text style={{ color: filtersInfo['People'].textColor }}>People</Text>
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
                <View
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        flex: 1
                    }}
                >
                    {filters}
                    <TouchableOpacity
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Text>
                            Hello
                    </Text>
                    </TouchableOpacity>
                </View>
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
        backgroundColor: 'rgba(206,191,203,1)',
        borderRadius: 20,
        borderColor: 'rgba(138,173,213,1)',
        padding: 18,
        margin: 6
    }
});