import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'

const Login = ({navigation}) => {
    return (
        <ImageBackground 
            source={require('../assets/source.gif')} 
            style={{
                resizeMode: "cover", 
                flex: 1,
                zIndex: 0
            }}
        >
            <View 
                style={{
                    zIndex: 1,
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }} 
            >            
                <TouchableOpacity 
                    onPress={() => navigation.navigate('CreateAccount')}
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#0099FF",
                        padding: 12,
                        zIndex: 4,
                        borderRadius: 30
                    }}
                >
                    <Text style={{ fontWeight: 'bold', color: 'white' }}>Create Account</Text>
                </TouchableOpacity>            
            </View>
        </ImageBackground>
        
    )
}

export default Login;