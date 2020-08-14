import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image, Dimensions} from 'react-native';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import JohnDoe from '../assets/kawaii.jpg';

const {width, height} = Dimensions.get("screen");


export default function CardMusiq(props){

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

        return (
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <TouchableOpacity>
                    <Image source={JohnDoe} style={styles.headerImage}/>
                    </TouchableOpacity>
                    <View
                        style={{width: 225}}
                    >
                        <Text style={styles.headerText}>
                            Dio Brando
                        </Text>
                        <Text 
                            numberOfLines={1}
                            ellipsizeMode='tail'
                            style={styles.headerMusic}
                        >
                            {props.children}
                        </Text>
                    </View>
                
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        width: width * 0.95,
        borderRadius: 22,
        elevation: 3,
        backgroundColor: '#FFFFFF',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        marginTop: height * 0.05
    },
    cardContent: {
        flexDirection: 'row',
        padding: 12,
        paddingLeft: 0
    },
    headerImage: {
        width: 64,
        flexDirection: 'row',
        height: 64,
        overflow: 'visible',
        borderRadius: 50,
        padding: 2,
        marginLeft: width * 0.035
    },
    headerText: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        color: '#000000',
        fontSize: 16,
        paddingTop: 9,
        marginTop: -4,
        fontFamily: 'Regular'
    },
    headerMusic: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        fontSize: 24,
        paddingTop: 4,
        color: '#000000',
        fontFamily: 'Medium'
    },
})