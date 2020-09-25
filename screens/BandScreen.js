import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { AppLoading } from 'expo';
import Lofi from '../assets/lofi.jpg';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useFonts } from '@use-expo/font';

const {width, height} = Dimensions.get("screen");

export default function BandScreen() {

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
    <View>

      <View style={{ marginTop: Constants.statusBarHeight, height: 280 }}>
        <ImageBackground
          source={Lofi}
          style={{flex: 1}}
          imageStyle={{resizeMode: 'cover'}}
        >
          <LinearGradient
            colors={['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0)']}
            style={{flex: 1}}
            start={{ x: 1, y: 1 }}
            end={{ x: 1, y: 0 }}
          >
            <View style={{flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 8, paddingTop: 4}}>
              <TouchableOpacity style={{padding: 4, top: 4}}>
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    color='white'
                    size={24}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{padding: 4, top: 4, borderColor: 'white', borderWidth: 1, paddingHorizontal: 18, borderRadius: 8}}>
                <Text style={{color: 'white', fontFamily: 'Regular', paddingVertical: 2}}>
                  Follow
                </Text>
              </TouchableOpacity>              
            </View>
            
            <Text numberOfLines={2} textBreakStrategy='balanced' allowFontScaling adjustsFontSizeToFit style={{position: 'absolute', bottom: 4, fontSize: 36, padding:8, fontFamily: 'SemiBold', color: 'rgba(44, 54, 63, 0.834)'}}>
              Soundgarden
            </Text>            
          </LinearGradient>
        </ImageBackground>    
      </View>

      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, paddingTop: 14, alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: 'Medium',
              fontSize: 20,
              color: 'rgba(44, 54, 63, 0.834)'
            }}
          >
            Tracks
          </Text>
          <TouchableOpacity
            style={{                                       
              borderRadius: 16,
              backgroundColor: 'pink',
            }}
          >
            <Text
              style={{
                fontFamily: 'Light',
                color: 'rgba(44, 54, 63, 0.834)',
                padding: 7
              }}
            >
              Show All
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}><Text>Hello</Text><Text>Icons</Text></View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}><Text>Hello</Text><Text>Icons</Text></View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}><Text>Hello</Text><Text>Icons</Text></View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}><Text>Hello</Text><Text>Icons</Text></View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}><Text>Hello</Text><Text>Icons</Text></View>
        </View>

      </View>

     </View>
  );
}
}
