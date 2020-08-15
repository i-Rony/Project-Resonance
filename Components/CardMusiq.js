import React, { useState } from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image, Dimensions} from 'react-native';

import { faHeart, faCommentAlt, faPlay, faPause, faShare, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart, faCommentAlt as farCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import JohnDoe from '../assets/kawaii.jpg';

const {width, height} = Dimensions.get("screen");


export default function CardMusiq(props){

    const [isFlipped, setIsFlipped] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [audioPosition, setAudioPosition] = useState(0.00);

    const flip = () => setIsFlipped(!isFlipped);
    const togglePlay = () => setIsPaused(!isPaused);
    const play = () => setIsPaused(false);
    const pause = (position) => { setIsPaused(true); setAudioPosition(position); }

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
                <View
                    style={{
                        backgroundColor: 'rgba(214, 219, 210, 0.6)',
                        borderTopLeftRadius: 22,
                        borderTopRightRadius: 22
                    }}
                >
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
                    {/* <TouchableOpacity
                        style={{
                            overflow: 'visible',
                            right: 34,
                            top: -28,
                            borderRadius: 50,
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            padding: 10
                        }}

                    >
                        <FontAwesomeIcon
                            icon={faHeart}
                            color= 'rgba(231, 90, 124, 0.82)'
                            size={18}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            overflow: 'visible',
                            right: 44,
                            top: -28,
                            borderRadius: 50,
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            padding: 10
                        }}

                    >
                        <FontAwesomeIcon
                            icon={faCommentAlt}
                            color= 'rgba(231, 90, 124, 0.82)'
                            size={16}
                        />
                    </TouchableOpacity>               */}
                    
                </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        padding: 10,
                        justifyContent: 'space-evenly',
                        backgroundColor: 'rgba(214, 219, 210, 0.6)',
                        borderBottomLeftRadius: 22,
                        borderBottomRightRadius: 22,
                    }}
                >
                <TouchableOpacity>
                    <FontAwesomeIcon
                        style={{
                            borderRadius: 50,
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            padding: 10
                        }}
                        icon={farHeart}
                        color= 'rgba(231, 90, 124, 0.82)'
                        size={22}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { flip(); play(); }}
                >
                    <FontAwesomeIcon
                        style={{
                            borderRadius: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 10
                        }}
                        icon={faPlay}
                        color= 'rgba(231, 90, 124, 0.82)'
                        size={22}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesomeIcon
                        style={{
                            borderRadius: 50,
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            padding: 10
                        }}
                        icon= {faShare}
                        color= 'rgba(231, 90, 124, 0.82)'
                        size={22}
                    />
                </TouchableOpacity>
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
        marginTop: height * 0.05,
    },
    cardContent: {
        flexDirection: 'row',
        borderRadius: 22,
        padding: 12,
        paddingBottom: 12,
        paddingLeft: 0,
        backgroundColor: 'rgba(231, 90, 124, 0.82)', //'rgba(214, 219, 210, 0.6)'
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
        color: 'rgba(44, 54, 63, 0.834)',
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
        color: 'rgba(44, 54, 63, 0.834)',
        fontFamily: 'Medium'
    },
})