import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { Card } from 'react-native-elements';

function Login ({navigation}) {

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
                <Card title="Login" containerStyle={{ height: 370, width: 260, alignItems: 'center', borderRadius: 8 }}>
                    <View style={{ justifyContent: "center", alignItems:'center' }}>
                        <TextInput
                            style={{ 
                                height: 45,
                                width: 165,
                                padding: 12,
                                margin: 10,
                                borderColor:'black', 
                                borderWidth: 1, 
                                borderRadius: 20,
                            }}
                            placeholder='Username'
                        ></TextInput>
                        <TextInput 
                            style={{
                                height: 45,
                                width: 165,
                                padding: 12,
                                margin: 10,
                                borderColor: 'black',
                                borderWidth: 1,
                                borderRadius: 20,
                            }}
                            secureTextEntry={true}
                            placeholder="Password"
                        ></TextInput>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Login')}
                            style={{
                                width: 100,
                                justifyContent: "center",
                                alignItems: "center",
                                padding: 8,
                                marginTop: 40,
                                zIndex: 4,
                                borderRadius: 20,
                                borderWidth: 2,
                                borderColor: '#990077'
                            }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#990077' }}> Login </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Doorway')}
                            style={{
                                width: 100,
                                justifyContent: "center",
                                alignItems: "center",
                                padding: 8,
                                marginTop: 15,
                                zIndex: 4,
                                borderRadius: 20,
                                borderWidth: 2,
                                borderColor: '#990077'
                            }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#990077' }}> Cancel </Text>
                        </TouchableOpacity>
                    </View>
                </Card>          
            </View>
        </ImageBackground>
        
    )
}

export default Login;