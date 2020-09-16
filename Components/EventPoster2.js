import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions, ImageBackground, TouchableOpacity, Image } from 'react-native';

const { width, height } = Dimensions.get('screen');

const EventPoster2 = (props) => {
    return(
        <View style={{paddingHorizontal: width*0.01}}>
        <View style={styles.poster}>
        <ImageBackground
            source={props.source}
            style={{flex: 1}}
            imageStyle={{ borderRadius: 22, resizeMode: 'cover' }}
        >
            <TouchableOpacity style={{flex: 1}}>
                <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'flex-start', padding: 10}}>
                    <Text allowFontScaling adjustsFontSizeToFit numberOfLines={3} style={{fontFamily: 'Bold', color: 'black', fontSize: 34}}>Nazis deprive Jews of possessions</Text>
                    <Text numberOfLines={1} style={{fontFamily: 'Regular', color: 'black', fontSize: 16, }}>Thu, 17 Sep 1940, 18:00</Text>
                    <Text numberOfLines={1} style={{fontFamily: 'Regular', color: 'black', fontSize: 16, }}>Germany</Text>
                </View>
            </TouchableOpacity>
            
        </ImageBackground>
        </View>
        </View>
    );
}

export default EventPoster2;

const styles = StyleSheet.create({
    poster: {
        width: 290,
        height: 200,
        borderRadius: 22,
        elevation: 3,
        backgroundColor: '#FFFFFF',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        marginTop: height * 0.05,
    }
  });