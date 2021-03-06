import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image, Dimensions} from 'react-native';

import { faHeart, faCommentAlt, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import JohnDoe from '../assets/kawaii.jpg';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

import { Video } from 'expo-av';

const {width, height} = Dimensions.get("screen");


export default function Card(props){

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
            <View style={styles.card}>
                <TouchableOpacity style={styles.header}>
                    <Image source={JohnDoe} style={styles.headerImage}/>
                    <View>
                        <Text style={styles.headerText}>
                            Dio Brando
                        </Text>
                        <Text style={styles.headerLocation}>
                            Tokyo, Japan 
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={{
                            overflow: 'visible',
                            right: -96,
                            top: -4,
                            borderRadius: 50,
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            padding: 10
                        }}

                    >
                        <FontAwesomeIcon
                            icon={faEllipsisV}
                            color= 'rgba(214, 219, 210, 0.85)' //'rgba(231, 90, 124, 0.82)'
                            size={22}
                        />
                    </TouchableOpacity>                
                </TouchableOpacity>

                <View style={styles.cardContent}>
                    <Video
                        source={props.source}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="cover"
                        shouldPlay={false}
                        isLooping={false}
                        useNativeControls
                        style={{ width: 300, height: 220 }}
                    />
                </View>
                <View style={styles.cardBottom}>
                    <TouchableOpacity style={styles.like}>
                        <View>
                        <FontAwesomeIcon
                            icon={farHeart} // if liked then {faHeart}
                            color= 'rgba(44, 54, 63, 0.834)'
                            size={22}
                        />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.comment}>
                        <View>
                        <FontAwesomeIcon
                            icon={faCommentAlt}
                            color='rgba(44, 54, 63, 0.834)'
                            size={22}
                        />
                        </View>
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
        marginTop: height * 0.05
    },
    cardContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardBottom: {
        flexDirection: 'row',
    },
    like: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: 'rgba(214, 219, 210, 1)',
        borderRightWidth: 0.6,
        borderTopColor: 'rgba(214, 219, 210, 0.6)',
        borderTopWidth: 1,
        paddingVertical: 10,
        backgroundColor: 'rgba(214, 219, 210, 0.6)',//'rgba(231, 90, 124, 0.38)',
        borderBottomLeftRadius: 22
    },
    comment: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftColor: 'rgba(214, 219, 210, 1)',
        borderLeftWidth: 0.6,
        borderTopColor: 'rgba(214, 219, 210, 0.6)',
        borderTopWidth: 1,
        paddingVertical: 10,
        backgroundColor: 'rgba(214, 219, 210, 0.6)',
        borderBottomRightRadius: 22
    },
    header: {
        flexDirection: 'row',
        paddingBottom: 6,
        // borderBottomColor: 'rgba(231,90,124,0.9)',
        // borderBottomWidth: 1,
        padding: 12,
        backgroundColor: 'rgba(44,54,63,0.834)', // 'rgba(231,90,124,0.64)',
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22
    },
    headerImage: {
        width: 74,
        height: 74,
        paddingBottom: 0,
        zIndex: 5,
        overflow: 'visible',
        marginTop: -30,
        borderRadius: 50,
        padding: 2,
        marginLeft: width * 0.035
    },
    headerText: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        color: '#FFFFFF', // '#2C363F', //'rgba(231,90,124,1)',
        fontSize: 14,
        paddingTop: 0,
        marginTop: -4,
        fontFamily: 'Regular'
    },
    headerLocation: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        fontSize: 14,
        paddingTop: 4,
        color: '#FFFFFF',
        fontFamily: 'Regular'
    }
})