import React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('screen');

export default function CollabCard(props) {

    return (
        <View style={{alignItems: 'center', flex: 1, marginVertical: -4}}>
            <View style={styles.poster}>
                <TouchableOpacity style={{flexDirection: 'row', flex: 1}}>
                    <LinearGradient
                        colors={[props.color1, props.color2]}
                        style={{flex: 0.65, flexDirection: 'column', borderTopLeftRadius: 22, borderBottomLeftRadius: 22, justifyContent: 'space-evenly'}}
                        start={[1, 1]}
                        end={[0, 1]}
                    >
                        <Text allowFontScaling adjustsFontSizeToFit numberOfLines={2} style={{paddingHorizontal: 8, width: 0.65*width*0.95, fontFamily: 'Bold', color: 'white', fontSize: 28}}>
                            {props.name}
                        </Text>
                        <View style={{flexDirection: 'row', paddingHorizontal: 8}}>
                            {/* Mapped accordingly math using (elevation=no.of members) and (right+=10*no.of members) and jodi 4+ members, last view ta render hobe with (right+=10*no.of membersrendered-2) */}
                            <View style={{elevation: 4}}>
                                <Image source={{uri: 'https://source.unsplash.com/collection/190727'}} style={{borderRadius: 50, resizeMode: 'cover', width: 28, height: 28}} />
                            </View>
                            <View style={{right: 10, elevation: 3}}>
                                <Image source={{uri: 'https://source.unsplash.com/random'}} style={{borderRadius: 50, resizeMode: 'cover', width: 28, height: 28}} />
                            </View>
                            <View style={{right: 20, elevation: 2}}>
                                <Image source={{uri: 'https://source.unsplash.com/weekly?water'}} style={{borderRadius: 50, resizeMode: 'cover', width: 28, height: 28}} />
                            </View>
                            <View style={{right: 30, elevation: 1}}>
                                <Image source={{uri: 'https://source.unsplash.com/weekly'}} style={{borderRadius: 50, resizeMode: 'cover', width: 28, height: 28}} />
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center', right: 38, elevation: 0, width: 28, borderRadius: 50, height: 28, backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
                                <Text allowFontScaling adjustsFontSizeToFit style={{marginRight: -3, fontFamily: 'Light', fontSize: 10}}>+3</Text>
                            </View>
                        </View>
                    </LinearGradient>
                    <Image source={{uri: props.poster}} style={{flex: 0.35, borderBottomRightRadius: 22, resizeMode: 'cover', borderTopRightRadius: 22}} />
                </TouchableOpacity>
            </View>
        </View>
    );
        //}
}

const styles = StyleSheet.create({
  poster: {
      width: width * 0.95,
      height: 130,
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