import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, BackHandler } from 'react-native';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';


const EventScreen = ({navigation}) => {

    const handleBackButton = () => {
        BackHandler.removeEventListener('hardwareBackPress', handleBackButton),
        navigation.navigate('Home');
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
    
    if (!fontsLoaded) {
		return <AppLoading />;

	} else {
        return(
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
                >
                    <Text>
                        Events
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default EventScreen;