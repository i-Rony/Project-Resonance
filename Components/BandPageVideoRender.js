import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Video } from 'expo-av';

const { width, height } = Dimensions.get('screen');

export default function BandPageVideoRender(props) {
    return (
        <View style={{paddingHorizontal: width*0.01}}>
            <View style={styles.poster}>
            <Video
                source={{uri: props.source}}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode='cover'
                shouldPlay={false}
                isLooping={false}
                useNativeControls
                style={{ width: 290, height: 200, borderRadius: 22 }}
            />
            </View>
        </View>
    )
}

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
    }
  });