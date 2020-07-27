import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

const { width, height } = Dimensions.get("screen");

const ProfileScreen = ({ navigation }) => {

    // useEffect(() => {
    //     navigation.addListener('focus', () => {
    //         navigation.openDrawer();
    //     });
    // });

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
                source={require('../assets/kawaii.jpg')}
                style={{
                    resizeMode: "cover",
                    flex: 1,
                }}
            >
                <LinearGradient
                    colors={['rgba(44, 54, 63, 0.6)', 'rgba(231, 90, 124, 0.6)']}
                    style={{
                        flex: 1,
                    }}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 0, y: 0 }}
                >
                    <View
                        style={{
                            paddingTop: 225,
                            paddingLeft: 0,
                            overflow: 'hidden',
                            marginLeft: -26,
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: 165,
                                height: 165,
                                paddingLeft: 4,
                                borderColor: 'white',
                                borderWidth: 1.5,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 100,

                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: 'Regular',
                                    fontSize: 65,
                                    marginBottom: -10,
                                    marginTop: -10,
                                    color: 'white',
                                }}
                            >
                                93
                                </Text>
                            <Text
                                style={{
                                    paddingTop: 0,
                                    fontFamily: 'Light',
                                    fontSize: 22,
                                    color: 'white'
                                }}
                            >
                                Posts
                                </Text>
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{
                            flex: 0.5,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            marginLeft: 10,
                        }}
                    >
                        <Text
                            style={{
                                color: 'white',
                                fontFamily: 'Regular'
                            }}
                        >
                            INSERT HIGHLIGHTS
                            </Text>

                    </View>

                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            marginLeft: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: 'Medium',
                                fontSize: 30,
                                color: 'white'
                            }}
                        >
                            Kawaii Chan
                            </Text>
                        <Text
                            style={{
                                fontFamily: 'Regular',
                                fontSize: 22,
                                color: 'white'
                            }}
                        >
                            Tokyo, Japan
                            </Text>
                        <TouchableOpacity style={{ left: width * 0.7, padding: 12, marginRight: -6, paddingHorizontal: 20, marginTop: -55, borderColor: 'white', borderWidth: 1.5, borderRadius: 12 }}>
                            <Text
                                style={{
                                    fontFamily: 'Regular',
                                    color: 'white'
                                }}
                            >
                                Follow
                            </Text>
                        </TouchableOpacity>
                    </View>

                </LinearGradient>
            </ImageBackground>
        )
    }
}

export default ProfileScreen;