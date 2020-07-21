import React from 'react';
import { Dimensions } from 'react-native';
import BubbleSelect, { Bubble } from 'react-native-bubble-select';

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
            <BubbleSelect
                onSelect={bubble => console.log('Selected: ', bubble.id)}
                onDeselect={bubble => console.log('Deselected: ', bubble.id)}
                width={width}
                height={height}
            >
                <Bubble id="bubble-1" text="Bubble One" />
                <Bubble id="bubble-2" text="Bubble Two" />
                <Bubble id="bubble-3" text="Bubble Three" />
                <Bubble id="bubble-4" text="Bubble Four" />
            </BubbleSelect>            
        )
    }
}

export default ChoiceScreen;