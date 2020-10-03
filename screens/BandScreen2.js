import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Dimensions, ScrollView, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { AppLoading } from 'expo';
import Lofi from '../assets/lofi.jpg';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useFonts } from '@use-expo/font';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import BandPageTrackRender from '../Components/BandPageTrackRender';
import BandPageTrackRenderCyberpunk from '../Components/BandPageTrackRenderCyberpunk';
import BandPageVideoRender from '../Components/BandPageVideoRender';

// #D271FF #22E2FF #0A72F7 #351EE9 #3D096B 

const {width, height} = Dimensions.get("screen");

export default function BandScreen2() {

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
      <>
    <StatusBar backgroundColor='#000000' barStyle='default' />
    <ScrollView style={{backgroundColor: '#3D096B'}}>

      <View style={{ height: 280 }}>
        <ImageBackground
          source={Lofi}
          style={{flex: 1}}
          imageStyle={{resizeMode: 'cover'}}
        >
          <LinearGradient
            colors={['#3D096B', 'rgba(255, 255, 255, 0)']}
            style={{flex: 1}}
            start={{ x: 1, y: 1 }}
            end={{ x: 1, y: 0 }}
          >
            <View style={{flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 8, paddingTop: 4}}>
              <TouchableOpacity style={{paddingVertical: 4, paddingRight: 4, top: 4}}>
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    color='#22E2FF'
                    size={24}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{padding: 4, top: 4, borderColor: '#22E2FF', borderWidth: 1, paddingHorizontal: 18, borderRadius: 8}}>
                <Text style={{color: '#22E2FF', fontFamily: 'Regular', paddingVertical: 2}}>
                  Follow
                </Text>
              </TouchableOpacity>              
            </View>
            
            <Text numberOfLines={2} textBreakStrategy='balanced' allowFontScaling adjustsFontSizeToFit style={{position: 'absolute', bottom: 4, fontSize: 36, padding:8, fontFamily: 'SemiBold', color: '#22E2FF'}}>
              Foster The People
            </Text>            
          </LinearGradient>
        </ImageBackground>    
      </View>

      {/* Tracks */}
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, paddingHorizontal: 12 ,marginTop: 4, paddingTop: 14, alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: 'SemiBold',
              fontSize: 22,
              color: '#22E2FF'
            }}
          >
            Tracks
          </Text>
          <TouchableOpacity
            style={{                                       
              borderRadius: 16,
              backgroundColor: 'rgba(210, 113, 255, 0.2)',
            }}
          >
            <Text
              style={{
                fontFamily: 'Light',
                color: '#22E2FF',
                padding: 7
              }}
            >
              Show All
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'column', marginBottom: 18, marginTop: 4}}>
          <BandPageTrackRenderCyberpunk name='Pumped Up Kicks' />
          <BandPageTrackRenderCyberpunk name='Imagination' onplay={true} />
          <BandPageTrackRenderCyberpunk name='Sit Next To Me' />
          <BandPageTrackRenderCyberpunk name='Houdini' />
          <BandPageTrackRenderCyberpunk name='Dont Stop (Color on the Walls)' />
        </View>
      </View>

      {/* Videos */}
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, paddingHorizontal: 12, paddingTop: 14, alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: 'SemiBold',
              fontSize: 22,
              color: '#22E2FF'
            }}
          >
            Videos
          </Text>
          <TouchableOpacity
            style={{                                       
              borderRadius: 16,
              backgroundColor: 'rgba(210, 113, 255, 0.2)',
            }}
          >
            <Text
              style={{
                fontFamily: 'Light',
                color: '#22E2FF',
                padding: 7
              }}
            >
              Show All
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        horizontal={true}
        contentContainerStyle={{
            paddingHorizontal: 3,
            alignContent: 'center',
            paddingBottom: 20
        }}
      >
          <BandPageVideoRender source={'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}/>
          <BandPageVideoRender source={'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}/>
          <BandPageVideoRender source={'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}/>

      </ScrollView>

     </ScrollView>
     </>
  );
}
}
