import React, { useEffect } from 'react';
import { Text, ImageBackground, TouchableOpacity, StyleSheet, BackHandler, Alert, ToastAndroid, Platform } from 'react-native';
import * as Animatable from 'react-native-animatable';
import {f, auth, database} from '../config/config';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

function Doorway({ navigation }) {

    f.auth().onAuthStateChanged(function(user) {
        if(user){
            navigation.navigate('MainStack')
        } else {
            console.log('Logged Out');
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
                // onPress: () => BackHandler.exitApp()
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
            BackHandler.addEventListener('hardwareBackPress', handleBackButton);
        });
    });

    return (

        <ImageBackground
            source={require('../assets/source.gif')}
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
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#fff' }}>Let's get started</Text>
                <Text>{"\n"}</Text>
                <Text style={{ fontSize: 13, color: '#ffffff' }}>Login to your account or signup for {"\n"}           an amazing experience</Text>
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
                    <Text style={{ fontSize: 18, color: '#fff' }}>Have an account? Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        BackHandler.removeEventListener('hardwareBackPress', handleBackButton),
                        navigation.navigate('CreateAccount')
                    }}
                    style={styles.TouchableOpacity}
                >
                    <Text style={{ fontSize: 18, color: '#fff' }}> Join us, it's Free </Text>
                </TouchableOpacity>
                <Text style={{
                    color: "#fff",
                    fontSize: 15,
                    paddingTop: 2,
                    paddingBottom: 16
                }}>-----  Or, you may Log In with  -----</Text>
                <TouchableOpacity
                    style={[styles.TouchableOpacity, {
                        backgroundColor: "#fff",
                        padding: 11,
                        paddingLeft: 25,
                        paddingRight: 35
                    }]}
                >
                    <Text style={{ fontSize: 18 }}>
                        <FontAwesome
                            name="facebook"
                            color="#3c3ab5"
                            size={20}
                        />    Facebook
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.TouchableOpacity, {
                        backgroundColor: "#fff",
                        padding: 11,
                        paddingLeft: 33,
                        paddingRight: 43
                    }]}
                >
                    <Text style={{ fontSize: 18 }}>
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

export default Doorway;

const styles = StyleSheet.create({

    TouchableOpacity: {
        justifyContent: "center",
        alignItems: "center",
        padding: 13,
        paddingLeft: 50,
        paddingRight: 50,
        zIndex: 4,
        borderRadius: 30,
        marginBottom: 15,
        borderWidth: 2,
        borderColor: '#fff',
        backgroundColor: 'rgba(255, 255, 255, 0.095)'
    }
});