import React from 'react';
import { Dimensions, View, Text, TouchableOpacity } from 'react-native';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import MainStack from './MainStack';


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
                    We offer a variety of items, so please choose :-{"\n"}
                    Blonde, Brunette, Petite, Milf, Asian, BBW, Latina, Natural Breasts,{"\n"}
                    Silicon Breasts, Communist Guerrilla Girls (Best Seller for American Capitalists) [imported from Cuba],{"\n"}
                    Dumb Orthodox Feminist Wo-'men' (Trending: new roleplay theme) [roleplay theme: 'without consent'],{"\n"}
                    Anal Services (may include extra services, for more details please contact our nearest service center){"\n"}
                    BDSM Services (may include extra services [free only for platinum members], for more details please contact our nearest service center){"\n"}
                    Complimentary Message Services for gold or higher tier members.
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