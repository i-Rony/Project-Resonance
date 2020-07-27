import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, BackHandler } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from './ProfileScreen';
import CollabScreen from './CollabScreen';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

const Drawer = createDrawerNavigator();

const UserScreen = ({navigation}) => {

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
            <Drawer.Navigator>
                <Drawer.Screen name='My Profile' component={ProfileScreen} />
                <Drawer.Screen name='My Collabs' component={CollabScreen} />
            </Drawer.Navigator>
        )
    }
}

export default UserScreen;