import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

const { width, height } = Dimensions.get('screen');

const EventPopularPoster = (props) => {

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
                    imageStyle={{ borderRadius: 22, resizeMode: 'cover' }}
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
                                style={styles.propsdate}
                                numberOfLines={1}
                                ellipsizeMode='tail'
                                textBreakStrategy='balanced'
                            >
                                {props.date}
                            </Text>

                            
                            <Text
                                style={styles.propsname}
                                numberOfLines={1}
                                ellipsizeMode='tail'
                                textBreakStrategy='balanced'
                            >
                                {props.name}
                            </Text>
                            <Text
                                style={styles.propsvenue}
                                numberOfLines={1}
                                ellipsizeMode='tail'
                                textBreakStrategy='balanced'
                            >
                                {props.venue}
                            </Text>
                        </LinearGradient>
                                              
                        
                    :
                        <TouchableOpacity 
                            style={styles.more} 
                            onPress={() => props.navigation.navigate('ViewEvent', 
                                { 
                                    eventId: 'EventPopularPoster',
                                    source: props.source,
                                    name: props.name, 
                                    venue: props.venue, 
                                    date: props.date,
                                    desc: props.desc
                                })}
                        >
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
        width: 290,
        height: 200,
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
    imgbackground: {
        flex: 1,
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
    propsdate: {
        position: 'absolute',
        bottom: 64,
        marginLeft: 5,
        alignSelf: 'baseline',
        fontFamily: 'Bold',
        color: 'white',
        fontSize: 14,
        paddingBottom: 6,
        borderBottomWidth: 1,
        borderColor: 'white'
    },
    propsname: {
        position: 'absolute',
        bottom: 34,
        marginLeft: 5,
        alignSelf: 'baseline',
        fontFamily: 'Bold',
        color: 'white',
        fontSize: 14,
        paddingBottom: 6,
        borderBottomWidth: 1,
        borderColor: 'white'
    },
    propsvenue: {
        position: 'absolute',
        bottom: 10,
        marginLeft: 5,
        alignSelf: 'baseline',
        fontFamily: 'Bold',
        color: 'white',
        fontSize: 14
    },
    lineargradient: {
        flex: 1,
        borderRadius: 22
    },
});

export default EventPopularPoster;