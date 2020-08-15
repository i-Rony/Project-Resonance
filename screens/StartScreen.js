import React from 'react';
import {  View, Image } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';


const StartScreen = ({navigation}) => {

    setTimeout(() => {
        navigation.navigate('Doorway');
    }, 3000);

    return (
        <LinearGradient
                colors={['#FF0077', '#CC0077', '#990077', '#660077', '#330077']}
                style={{flex: 1}}
        >            
            <View 
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={require('../assets/6.png')}
                    style={{ width: 300,  height: 300 }}
                />           
            </View>
        </LinearGradient>
    );
};

export default StartScreen;