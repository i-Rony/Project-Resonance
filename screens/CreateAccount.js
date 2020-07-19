import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'

const CreateAccount = ({navigation}) => {
    return (
        <ImageBackground 
            source={require('C:/Users/Ron/Projects/resonance/assets/source.gif')} 
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
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#0099FF",
                        padding: 13,
                        paddingLeft: 22,
                        paddingRight: 22,
                        zIndex: 4,
                        borderRadius: 30,
                        marginBottom: 15
                    }}
                >
                    <Text style={{ fontSize: 18 ,fontWeight: 'bold', color: 'white' }}>Create Account</Text>
                </TouchableOpacity>      
                

                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white' }}>
                        If you have an account, you can directly 
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#0099FF'}}> Login</Text>
                    </TouchableOpacity> 
                </View> 

                {/* <TouchableOpacity 
                    onPress={() => navigation.navigate('Login')}                    
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#0099FF",
                        padding: 13,
                        paddingLeft: 22,
                        paddingRight: 22,
                        zIndex: 4,
                        borderRadius: 30,
                    }}
                >
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Login</Text>
                </TouchableOpacity>             */}
            </View>
        </ImageBackground>
    )
}

export default CreateAccount;



