import React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const { width, height } = Dimensions.get('screen');

export default function PeopleCardTwo(props) {

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
        <View style={{alignItems: 'center', flex: 1, marginVertical: -4}}>
        <View style={styles.poster}>
            <ImageBackground
                source={props.cover}
                style={{flex: 0.68, width: width.poster}}
                imageStyle={{resizeMode: 'cover', borderTopLeftRadius: 22, borderTopRightRadius: 22}}
            >
                <LinearGradient
                    colors={['rgba(44, 54, 63, 0.84)', 'rgba(255, 255, 255, 0)']}
                    style={{flex: 1, borderTopLeftRadius: 22, borderTopRightRadius: 22}}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 1, y: 0 }}    
                >
                    {/* <TouchableOpacity
                        style={{
                            width: 100,
                            top: 4,
                            left: width*0.63,
                            marginVertical: 2,
                            borderWidth: 1,
                            borderColor: 'rgba(0, 217, 192, 1)',
                            backgroundColor: 'rgba(0, 217, 192, 1)',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingHorizontal: 10,
                            borderRadius: 14,
                            marginLeft: 4,
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: 'Light'
                            }}
                        >
                            Guitar
                        </Text>
                    </TouchableOpacity> */}
                    <Text
                        style={{
                            position: 'absolute',
                            bottom: 2,
                            left: 94,
                            marginLeft: 4,
                            alignSelf: 'baseline',
                            fontFamily: 'Bold',
                            color: 'white',
                            fontSize: 20
                        }}
                        numberOfLines={1}
                        ellipsizeMode='tail'
                        textBreakStrategy='balanced'
                    >
                        {props.name}
                    </Text>
                </LinearGradient>
            </ImageBackground>
            <View style={{
                flex: 0.32, //0.26,
                flexDirection: 'row',
                backgroundColor: props.color,
                borderBottomLeftRadius: 22,
                borderBottomRightRadius: 22
            }}>
                <TouchableOpacity
                    style={{ flex: 1, top: -42, left: 0, padding: 10 }}
                >
                    <Image source={props.profile} style={{ resizeMode: 'center', width: 80, height: 80, borderRadius: 100}}/>
                </TouchableOpacity>
                <Text
                    style={{width: 150, top: 3, left: -24, color: 'rgba(44, 54, 63, 1)', paddingLeft: 10, fontFamily: 'Regular'}}
                    numberOfLines={3}
                    ellipsizeMode='tail'
                    textBreakStrategy='highQuality'
                >
                    
                </Text>
                {/* <Text
                    style={{
                        color: 'rgba(44, 54, 63, 0.834)',
                        left: -62,
                        fontSize: 16,
                        fontFamily: 'Medium'
                    }}
                >                
                    8.4K
                </Text>
                <FontAwesomeIcon 
                    style={{
                        left: -59,
                        marginTop: 3.5
                    }}
                    icon={faHeart}
                    size={15}
                    color='rgba(44, 54, 63, 0.834)'
                />

                <Text
                    style={{
                        color: 'rgba(44, 54, 63, 0.834)',
                        left: -50,
                        fontSize: 16,
                        fontFamily: 'Medium'
                    }}
                >                
                    500
                </Text>
                <FontAwesomeIcon 
                    style={{
                        left: -47,
                        marginTop: 3.5
                    }}
                    icon={faLink}
                    size={15}
                    color='rgba(44, 54, 63, 0.834)'
                />
                 */}
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        left: -20,
                        borderColor: 'rgba(44, 54, 63, 0.834)'
                    }}
                >
                    <FontAwesomeIcon 
                        icon={faPlus}
                        size={20}
                        color='rgba(44, 54, 63, 0.834)'
                    />
                </TouchableOpacity>
            </View>
            {/* <View style={{flex: 0.12, paddingHorizontal: 14,  flexDirection: 'row', backgroundColor: 'rgba(231, 90, 124, 0.1)', borderBottomLeftRadius: 22, borderBottomRightRadius: 22}}>
                <ScrollView 
                    horizontal
                >
                <TouchableOpacity
                    style={{
                        marginVertical: 2,
                        borderWidth: 1,
                        borderColor: 'rgba(0, 217, 192, 0.5)',
                        backgroundColor: 'rgba(0, 217, 192, 0.5)',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 10,
                        borderRadius: 14,
                        marginLeft: 4,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'Light'
                        }}
                    >
                        Guitar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        marginVertical: 2,
                        borderWidth: 1,
                        borderColor: 'rgba(174, 247, 142, 0.6)',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 10,
                        borderRadius: 14,
                        marginLeft: 4,
                        backgroundColor: 'rgba(174, 247, 142, 0.6)'
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'Light'
                        }}
                    >
                        Synth
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        marginVertical: 2,
                        borderWidth: 1,
                        borderColor: 'rgba(255, 67, 101, 0.6)',
                        backgroundColor: 'rgba(255, 67, 101, 0.6)',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 10,
                        borderRadius: 14,
                        marginLeft: 4,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'Light'
                        }}
                    >
                        Drums
                    </Text>
                </TouchableOpacity>
                </ScrollView>
            </View> */}
        </View>
        </View>
    );
        }
}

const styles = StyleSheet.create({
  poster: {
      width: width * 0.95,
      height: 200,
      borderRadius: 22,
      elevation: 3,
      backgroundColor: '#FFFFFF',
      shadowOffset: {width: 1, height: 1},
      shadowColor: '#333333',
      shadowOpacity: 0.3,
      shadowRadius: 2,
      marginHorizontal: 4,
      marginVertical: 0,
      marginTop: height * 0.05,
  }
});
