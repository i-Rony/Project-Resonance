import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Dimensions, TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AnimateNumber from 'react-native-animate-number';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

const { width, height } = Dimensions.get("screen");

const ProfileScreen = ({ navigation }) => {

    const posts = 93;

    const bio = 'You thought it was Kawaii Chan, but it was actually me, DIO. Aboslute Anime-freak. People call me weeb'

    const [isFollowing, setFollowing] = useState(false)

    const togglefollow = () => {
        if(isFollowing === true){
            setFollowing(false);
        } else {
            setFollowing(true);
        }
    };
    
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
                                {posts != 0 ? <AnimateNumber value={posts} timing="linear" countBy={9}/> : 0 }

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
                                color: 'white',
                                flexDirection: 'column',
                                flexWrap: 'wrap',
                            }}
                        >
                            Kawaii Chan
                        </Text>
                        <Text
                            style={{
                                fontFamily: 'Regular',
                                fontSize: 22,
                                color: 'white',
                                flexDirection: 'column',
                                flexWrap: 'wrap',
                            }}
                        >
                            Tokyo, Japan
                        </Text>
                        <TouchableOpacity                         
                            style={{ 
                                flexDirection: 'column',
                                flexWrap: 'wrap',
                                left: width * 0.7, 
                                padding: 12, 
                                marginRight: -6, 
                                paddingHorizontal: 20, 
                                marginTop: -55, 
                                borderColor: isFollowing === true ? 'rgba(231,90,124,1)' : 'white', 
                                borderWidth: 1.5, 
                                borderRadius: 12,
                                backgroundColor: isFollowing === true ? 'rgba(231,90,124,1)' : 'transparent'
                            }}    
                            onPress={() => togglefollow()}                   
                        >
                            {isFollowing === true ? 

                            <FontAwesomeIcon
                                icon={faCheck}
                                color='#2C363F'
                                size={18}
                                style={{
                                    paddingHorizontal: 20,
                                    padding: 10,
                                    paddingRight: 26,
                                    marginBottom: -1
                                }}
                            />
                            
                            
                            : 

                            <Text
                                style={{
                                    fontFamily: 'Regular',
                                    color: 'white'
                                }}                                
                            >
                                Follow
                            </Text>                            

                            }
                            
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{
                            flex: 0.5,
                            alignItems: 'flex-start',
                            marginLeft: 10,
                            marginTop: -height*0.1
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 15,
                                fontFamily: 'Medium',
                                color: 'white',
                                width: width*0.7
                            }}
                            numberOfLines={6}
                            textBreakStrategy='balanced'
                        >
                            {bio}
                        </Text>
                    </View>
                </LinearGradient>
            </ImageBackground>
        )
    }
}

export default ProfileScreen;