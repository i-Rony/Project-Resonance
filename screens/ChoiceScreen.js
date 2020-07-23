import React from 'react';
import { Dimensions, View, Text } from 'react-native';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';


const { width, height } = Dimensions.get('window');

const ChoiceScreen = ({navigation}) => {

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
            <View>
                <Text>
                    Henlo Choices
                </Text>
            </View>      
        )
    }
}

export default ChoiceScreen;