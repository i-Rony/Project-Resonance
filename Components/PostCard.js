import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import { Video } from 'expo-av';
import { faHeart, faCommentAlt, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

const { width, height } = Dimensions.get('screen');

const PostCard = (props) => {

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
            <View style={styles.poster}>
                {/*Change the background color */}
                <View style={{flex: 0.74, backgroundColor: 'rgba(214, 219, 210, 0.6)', borderTopLeftRadius: 22, borderTopRightRadius: 22, justifyContent: 'center', alignItems: 'center'}}>
                    <Video
                        source={{uri: props.source}}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode='contain'
                        shouldPlay={false}
                        isLooping={false}
                        useNativeControls
                        style={{ width: width * 0.95, height: 0.74*260, borderRadius: 22 }}
                    />
                </View>
                {/*Change the background color */}
                <View style={{flex: 0.26, flexDirection: 'row', backgroundColor: 'rgba(214, 219, 210, 0.6)', alignItems: 'center', borderBottomLeftRadius: 22, borderBottomRightRadius: 22}}>
                    <TouchableOpacity>
                        <Image source={props.userPhoto} style={{borderRadius: 50, width: 50, height: 50, marginHorizontal: 12}}  />
                    </TouchableOpacity>
                    <View style={{flexDirection: 'column', justifyContent: 'space-evenly'}}>
                        <Text style={{fontFamily: 'Medium', fontSize: 16, color: 'rgba(44,54,63,0.834)'}}>{props.userName}</Text>
                        <Text style={{fontFamily: 'Regular', fontSize: 15, color: 'rgba(44,54,63,0.834)'}}>{props.userLocation}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', right: -48}}>
                        <TouchableOpacity>
                        <FontAwesomeIcon 
                            icon={farHeart}
                            color='rgba(44, 54, 63, 0.834)'
                            size={23}
                            style={{marginHorizontal: 10 }}
                        />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <FontAwesomeIcon 
                            icon={faCommentAlt}
                            style={{marginTop: 3}}
                            color='rgba(44, 54, 63, 0.834)'
                            size={22}
                        />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesomeIcon 
                                icon={faEllipsisV}
                                style={{marginHorizontal: 5, marginTop: 1}}
                                color='rgba(44, 54, 63, 0.834)'
                                size={22}
                            />
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </View>
        )
    }
}

export default PostCard;

const styles = StyleSheet.create({
  poster: {
      width: width * 0.95,
      height: 260,
      borderRadius: 22,
      elevation: 3,
      backgroundColor: '#FFFFFF',
      shadowOffset: {width: 1, height: 1},
      shadowColor: '#333333',
      shadowOpacity: 0.3,
      shadowRadius: 2,
      marginHorizontal: 4,
      marginVertical: 0,
      marginTop: 8,
      marginBottom: 8
  }
});