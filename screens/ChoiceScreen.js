import React from 'react';
import { Dimensions, View, Text, TouchableOpacity } from 'react-native';

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
            <>           
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>
                    Please choose :-{"\n"}
                </Text>
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('MainStack')}
                >
                    <Text>Skip for now</Text>
                </TouchableOpacity>
            </View> 
            </>     
        );
    }
}

export default ChoiceScreen;