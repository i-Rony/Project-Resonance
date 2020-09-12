import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

const { width, height } = Dimensions.get('screen');

const EventPoster = (props) => {

    const [press, setPress] = useState(false);

    let [fontsLoaded] = useFonts({
        'Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        'SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
        'Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
        'Light': require('../assets/fonts/Montserrat-Light.ttf'),
        'Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    });

    const pressOn = () => {
        setPress(!press)
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

        return(
            <View style={{paddingHorizontal: width*0.01}}>
            <View style={styles.poster}>
                <ImageBackground
                    source={props.source}
                    style={styles.imgbackground}
                    imageStyle={{ borderRadius: 22 }}
                >
                    <TouchableOpacity style={{flex: 1}} onPress={() => pressOn()}>
                    {
                        press 
                    ?                   
                        <LinearGradient
                            colors={['rgba(44, 54, 63, 0.84)', 'rgba(255, 255, 255, 0)']}
                            style={styles.lineargradient}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text
                                style={styles.propschildren}
                                numberOfLines={4}
                                ellipsizeMode='tail'
                                textBreakStrategy='balanced'
                            >
                                {props.children}
                            </Text>                        
                        </LinearGradient>
                    :
                        <TouchableOpacity style={styles.more} onPress={() => props.navigation.navigate('ViewEvent', { eventId: 'EventPoster', source: props.source })}>
                            <Text style={styles.moreText}>
                                VIEW 
                            </Text>
                            <FontAwesomeIcon 
                                icon={faArrowRight}
                                color='rgba(44, 54, 63, 0.85)'
                                size={10}
                            />
                        </TouchableOpacity>
                    }
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    poster: {
        width: 190,
        height: 240,
        borderRadius: 22,
        elevation: 3,
        backgroundColor: '#FFFFFF',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        marginTop: height * 0.05,
    },
    more: {
        alignContent: 'flex-end',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        top: 10,
        right: 10, 
        alignItems: 'center'
    },
    moreText: {
        fontFamily: 'Regular',
        color: 'rgba(44, 54, 63, 0.85)'    
    },
    propschildren: {
        position: 'absolute',
        bottom: 10,
        marginLeft: 4,
        alignSelf: 'baseline',
        fontFamily: 'Bold',
        color: 'white',
        fontSize: 20
    },
    lineargradient: {
        flex: 1,
        borderRadius: 22
    },
    imgbackground: {
        resizeMode: 'cover',
        flex: 1,
    }

});

export default EventPoster;