import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image, Dimensions} from 'react-native';

import JohnDoe from '../assets/kawaii.jpg';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

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
                <Text style={styles.headerText}>
                    Dio Brando
                </Text>                
                </TouchableOpacity>

                <View style={styles.cardContent}>
                    {props.children}
                </View>
                <View style={styles.cardBottom}>
                    <TouchableOpacity style={styles.like}>
                        <View>
                            <Text>
                                Like
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.comment}>
                        <View>
                            <Text>
                                Comment
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({

    card: {
        width: 365,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        marginTop: height * 0.05
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,
        padding: 120
    },
    cardBottom: {
        flexDirection: 'row',
    },
    like: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: 'rgba(214,219,210,1)',
        borderRightWidth: 0.6,
        borderTopColor: 'rgba(214,219,210,1)',
        borderTopWidth: 1,
        paddingVertical: 10
    },
    comment: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftColor: 'rgba(214,219,210,1)',
        borderLeftWidth: 0.6,
        borderTopColor: 'rgba(214,219,210,1)',
        borderTopWidth: 1,
        paddingVertical: 10

    },
    header: {
        flexDirection: 'row',
        paddingBottom: 2,
        borderBottomColor: 'rgba(214,219,210,1)',
        borderBottomWidth: 1
    },
    headerImage: {
        width: 65,
        height: 65,
        paddingBottom: 0,
        zIndex: 5,
        overflow: 'visible',
        marginTop: -30,
        borderRadius: 50,
        padding: 5,
        marginLeft: width * 0.05
    },
    headerText: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        fontSize: 14,
        fontFamily: 'Regular'
    }
})