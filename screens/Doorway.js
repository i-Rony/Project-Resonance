import React from 'react'; 
import { Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

const Doorway = ({ navigation }) => {

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
                <Text style={{fontSize: 22, fontWeight: 'bold', color: '#fff'}}>Let's get started</Text>
                <Text>{"\n"}</Text>
                <Text style={{fontSize: 13, color: '#ffffff'}}>Login to your account or signup for {"\n"}           an amazing experience</Text>
                <Text>{"\n"}</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    style={[styles.TouchableOpacity, {
                        paddingLeft: 22,
                        paddingRight: 22,
                    }]}
                >
                    <Text style={{ fontSize: 18, color: '#fff' }}>Have an account? Login</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    onPress={() => navigation.navigate('CreateAccount')}
                    style={ styles.TouchableOpacity }
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
                    style={[ styles.TouchableOpacity, { 
                        backgroundColor: "#fff", 
                        padding: 11,
                        paddingLeft: 25,
                        paddingRight: 35
                    }]}
                >
                    <Text style={{ fontSize: 18 }}>
                        <FontAwesome
                            name="facebook"
                            color='black'
                            size={20}
                        />    Facebook 
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.TouchableOpacity, {
                        backgroundColor: "#fff",
                        padding: 11,
                        paddingLeft: 20,
                        paddingRight: 35
                    }]}
                >
                    <Text style={{ fontSize: 18 }}>
                        <FontAwesome
                            name="google"
                            color='black'
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