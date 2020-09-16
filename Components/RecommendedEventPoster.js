import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Image } from 'react-native';

const { width, height } = Dimensions.get('screen');

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean enim quam, commodo id orci in, dignissim dapibus orci. Donec pretium sodales suscipit. Nullam non nunc consequat, faucibus turpis quis, ultrices tortor.'


const RecommendedEventPoster = (props) => {
    return(
        <View style={[styles.poster, {justifyContent: 'space-evenly', backgroundColor: 'rgba(214,219,210,1)'}]}>
            <View style={{flex: 0.6, flexDirection: 'row', justifyContent: 'flex-start',paddingHorizontal:10, paddingTop: 10, backgroundColor: 'rgba(231,90,124,0.65)', paddingBottom: 10, borderTopLeftRadius: 22, borderTopRightRadius: 22}}>
                <TouchableOpacity style={{alignSelf: 'center'}}>
                    <Image source={props.source} style={{ resizeMode: 'cover', width: 100, height: 100, borderRadius: 10}} />
                </TouchableOpacity>
                <View style={{flexDirection: 'column', justifyContent: 'space-evenly', paddingLeft: 8}}>
                    <Text numberOfLines={2} style={{fontFamily: 'SemiBold', maxWidth: 160, color: 'white' }}>The Destruction of Chipotle</Text>
                    <Text numberOfLines={1} style={{fontFamily: 'Regular', maxWidth: 160, color: 'white' }}>03:00 AM, Sun, 22 Aug</Text>
                    <Text numberOfLines={2} style={{fontFamily: 'Regular', maxWidth: 160, color: 'white' }}>Saint De Boulevard Road</Text>
                </View>
            </View>
            <View style={{flex: 0.4,paddingHorizontal:10, paddingBottom: 10, justifyContent: 'center', backgroundColor: 'white', borderBottomLeftRadius: 22, borderBottomRightRadius: 22}}>
                <Text numberOfLines={3} style={{fontFamily: 'Light', color: 'rgba(44, 54, 63, 0.834)'}}>{description}</Text>
            </View>
        </View>
    );
}

export default RecommendedEventPoster;

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