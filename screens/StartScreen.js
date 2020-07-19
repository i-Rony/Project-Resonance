import React from 'react';
import {  View, StatusBar, Image } from 'react-native';
// import Logo from '../assets/1.png'
import Logo from '../assets/2.png'
// import Logo from '../assets/3.png'
// import Logo from '../assets/4.png'
// import Logo from '../assets/5.png'


const StartScreen = ({navigation}) => {

    setTimeout(() => {
        navigation.navigate('Doorway');
    }, 2500);

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
            // backgroundColor: '#121640' //Logo 1
            // backgroundColor: '#FFDE59' // Logo 4
        }}>
            <Image source={Logo} style={{ width: 300,  height: 300 }}/>
        </View>
    );
};

export default StartScreen;