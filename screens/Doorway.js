import React from 'react'; 
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';

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
                        //backgroundColor: "#ff7b00",
                        padding: 11,
                        marginBottom: 10,
                        zIndex: 4,
                        borderRadius: 5,
                        borderWidth: 2,
                        borderColor: '#fff'
                    }}
                >
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#fff' }}>Create Account</Text>
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
                        padding: 11,
                        marginTop: 10,
                        zIndex: 4,
                        borderRadius: 5,
                        borderWidth: 2,
                        borderColor: '#fff'
                    }}
                >
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#fff' }}> Login </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>

    )
}

export default Doorway;