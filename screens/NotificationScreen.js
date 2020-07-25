import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';


const NotificationScreen = ({ navigation }) => {

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
        return (
            <View
                style={{
                    backgroundColor: 'rgba(0,0,0,0.95)',
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
                >
                    <Text style={{color: '#fff'}}>
                        Notifications
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default NotificationScreen;