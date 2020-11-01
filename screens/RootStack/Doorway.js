import React, { useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, BackHandler, Alert, ToastAndroid, Platform } from 'react-native';
import * as Animatable from 'react-native-animatable';
import {f, auth, database} from '../../config/config';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

function Doorway({ navigation }) {

    f.auth().onAuthStateChanged(function(user) {
        if(user){
            navigation.navigate('MainStack')
        }
    });

   const handleBackButton = () => {
        Alert.alert(
            'Exit App ?',
            '', [{
                text: 'Cancel',
                style: 'cancel'
            }, {
                text: 'OK',
                onPress: () => {
                    if (Platform.OS === 'android') {
                        ToastAndroid.show("We don't believe in 'good'-byes,\n\tHope to see you soon...", ToastAndroid.SHORT);
                        setTimeout(() => {
                            BackHandler.exitApp();
                        }, 1000);
                    }
                    else {
                        BackHandler.exitApp();
                    }
                }//end of onPress()
            }],
            {
                cancelable: false
            }
        );
        return true;
    }

    useEffect(() => {

        navigation.addListener('focus', () => {
            BackHandler.addEventListener('hardwareBackPress', handleBackButton)
        })

        navigation.addListener('blur', () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
        })
    });

    let [fontsLoaded] = useFonts({
        'Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
        'SemiBold': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
        'Medium': require('../../assets/fonts/Montserrat-Medium.ttf'),
        'Light': require('../../assets/fonts/Montserrat-Light.ttf'),
        'Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;

    } else {

    return (

        <ImageBackground
            source={require('../../assets/guitarStrings.jpg')}
            style={{
                resizeMode: "cover",
                flex: 1,
                zIndex: 0
            }}
        >
            <Animatable.View
                animation='fadeIn'
                delay={1000}
                style={{
                    zIndex: 1,
                    flex: 1,
                    justifyContent: "flex-start",
                    marginTop: 140,
                    alignItems: "center",
                }}
            >
                <Text style={{ fontSize: 30, fontFamily: 'Bold', color: '#FFFFFF' }}>Let's get started</Text>
                <Text>{"\n"}</Text>
                <Text style={{ fontSize: 14, color: '#ffffff', fontFamily: 'Regular' }}>Login to your account or signup for {"\n"}           an amazing experience</Text>
                <Text>{"\n"}</Text>
                <TouchableOpacity
                    onPress={() => {
                        BackHandler.removeEventListener('hardwareBackPress', handleBackButton),
                        navigation.navigate('Login')                        
                    }}
                    style={[styles.TouchableOpacity, {
                        paddingLeft: 22,
                        paddingRight: 22,
                    }]}
                >
                    <Text style={{ fontFamily: 'Medium', fontSize: 18, color: '#fff' }}>Have an account? Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        BackHandler.removeEventListener('hardwareBackPress', handleBackButton),
                        navigation.navigate('CreateAccount')
                    }}
                    style={styles.TouchableOpacity}
                >
                    <Text style={{ fontFamily: 'Medium', fontSize: 18, color: '#fff' }}> Join us, it's Free </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 15 }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'rgba(255,255,255,0)' }} />
                    <View style={{ flex: 1, height: 1, backgroundColor: 'rgba(255,255,255,1)' }} />
                    <View>
                        <Text style={{ 
                            width: 200, 
                            textAlign: 'center' ,
                            color: "#fff",
                            fontSize: 15,
                            fontFamily: 'Regular'
                        }}>Or, you may Log In with</Text>
                    </View>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'rgba(255,255,255,1)' }} />
                    <View style={{ flex: 1, height: 1, backgroundColor: 'rgba(255,255,255,0)' }} />
                </View>
                <TouchableOpacity
                    style={[styles.TouchableOpacity, {
                        backgroundColor: "rgba(255,255,255,0.84)",
                        padding: 11,
                        paddingLeft: 25,
                        paddingRight: 35
                    }]}
                >
                    <Text style={{ fontFamily: 'Medium',fontSize: 18 }}>
                        <FontAwesome
                            name="facebook"
                            color="#3c3ab5"
                            size={20}
                        />    Facebook
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.TouchableOpacity, {
                        backgroundColor: "rgba(255,255,255,0.846)",
                        padding: 11,
                        paddingLeft: 33,
                        paddingRight: 43
                    }]}
                >
                    <Text style={{ fontFamily: 'Medium', fontSize: 18 }}>
                        <FontAwesome
                            name="google"
                            color="#ba4141"
                            size={20}
                        />    Google
                    </Text>
                </TouchableOpacity>
            </Animatable.View>
        </ImageBackground>

    )
    }

}

export default Doorway;

const styles = StyleSheet.create({

    TouchableOpacity: {
        justifyContent: "center",
        alignItems: "center",
        padding: 13,
        paddingHorizontal: 55,
        zIndex: 4,
        borderRadius: 30,
        marginBottom: 15,
        borderWidth: 2,
        borderColor: '#fff',
        backgroundColor: 'rgba(255, 255, 255, 0.12)'
    }
});