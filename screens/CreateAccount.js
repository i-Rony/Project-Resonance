import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { Card } from 'react-native-elements';

function CreateAccount({ navigation }) {

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
                <Card title="Create Account" containerStyle={{ height: 540, width: 270, alignItems: 'center', borderRadius: 8 }}>
                    <View style={{ justifyContent: "center", alignItems: 'center' }}>
                        <TextInput
                            style={{
                                height: 45,
                                width: 175,
                                padding: 12,
                                margin: 10,
                                marginTop: 14,
                                borderColor: 'black',
                                borderWidth: 1,
                                borderRadius: 20,
                            }}
                            placeholder='Username'
                        />
                        <TextInput
                            style={{
                                height: 45,
                                width: 175,
                                padding: 12,
                                margin: 10,
                                borderColor: 'black',
                                borderWidth: 1,
                                borderRadius: 20,
                            }}
                            placeholder='Email'
                        />
                        <TextInput
                            style={{
                                height: 45,
                                width: 175,
                                padding: 12,
                                margin: 10,
                                borderColor: 'black',
                                borderWidth: 1,
                                borderRadius: 20,
                            }}
                            secureTextEntry={true}
                            placeholder='Password'
                        />
                        <TextInput
                            style={{
                                height: 45,
                                width: 175,
                                padding: 12,
                                margin: 10,
                                borderColor: 'black',
                                borderWidth: 1,
                                borderRadius: 20,
                            }}
                            secureTextEntry={true}
                            placeholder="Confirm Password"
                        />
                        <TouchableOpacity
                            onPress={() => navigation.navigate('CreateAccount')}
                            style={{
                                width: 175,
                                justifyContent: "center",
                                alignItems: "center",
                                padding: 10,
                                marginTop: 60,
                                zIndex: 4,
                                borderRadius: 20,
                                borderWidth: 2,
                                borderColor: '#990077'
                            }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#990077' }}> Create Account </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Doorway')}
                            style={{
                                width: 110,
                                justifyContent: "center",
                                alignItems: "center",
                                padding: 8,
                                marginTop: 22,
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

export default CreateAccount;