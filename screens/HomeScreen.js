import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, BackHandler, Alert, ToastAndroid, Platform } from 'react-native';
import { f, auth, database } from '../config/config';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';


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

    const signOutUser = () => {
        auth.signOut()
            .then(() => {
                console.log('Logged Out...');
            }).catch((error) => {
                console.log('Error: ', error);
            });

        navigation.navigate('Doorway')
    }


    if (!fontsLoaded) {
        return <AppLoading />;

    } else {
        return (
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1
                }}
            >
                <TouchableOpacity
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    onPress={() => signOutUser()}
                >
                    <Text>
                        Sign Out
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default HomeScreen;