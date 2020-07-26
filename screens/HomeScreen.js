import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { f, auth, database } from '../config/config';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';


const HomeScreen = ({ navigation }) => {

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