import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import {f, auth, database} from '../config/config';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

const HomeScreen = ({navigation}) => {

    <GestureRecognizer
        // onSwipe={(direction, state) => {
        //     switch (direction) {
        //         case SWIPE_LEFT:
        //             return navigation.navigate('User');
        //         case SWIPE_RIGHT:
        //             return navigation.navigate('Events');
        //     }
        // }}
        // onSwipeUp={(state) => this.onSwipeUp(state)}
        // onSwipeDown={(state) => this.onSwipeDown(state)}
        onSwipeLeft={() => navigation.navigate('User')}
        onSwipeRight={() => navigation.navigate('Events')}
    />

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
        return(
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
                    onPress={() => signOutUser()}
                >
                    <Text style={{color: '#fff'}}>
                        Sign Out
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default HomeScreen;