import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'

const Doorway = ({ navigation }) => {
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
                        backgroundColor: "#ff7b00",
                        padding: 12,
                        marginBottom: 10,
                        zIndex: 4,
                        borderRadius: 30,
                        borderWidth: 1,
                        borderColor: '#332323'
                    }}
                >
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>Create Account</Text>
                </TouchableOpacity>
                <Text style={{
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 40,
                    fontWeight: 'bold',
                    color: 'white'
                }}> / </Text>
            {/* </View>
            <View><Text>Or</Text></View>
            <View
                style={{
                    zIndex: 1,
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            > */}
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#ff7b00",
                        padding: 12,
                        marginTop: 10,
                        zIndex: 4,
                        borderRadius: 24,
                        borderWidth: 1,
                        borderColor: '#332323'
                    }}
                >
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}> Login </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>

    )
}

export default Doorway;