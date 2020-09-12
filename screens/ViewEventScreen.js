import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function ViewEventScreen({ route, navigation }) {

    const { eventId } = route.params;
    const { source, name, venue, date, desc } = route.params;

    return (
        <ScrollView style={{flex: 1}}>
        <View style={{flex: 1, marginTop: Constants.statusBarHeight}}>
            <ImageBackground
                style={{flex: 1, height: 240}}
                source={source}
                imageStyle={{resizeMode: 'cover'}}
            >
                <LinearGradient
                    colors={['rgba(44, 54, 63, 0.65)', 'rgba(255, 255, 255, 0)']}
                    style={{flex: 1}}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.1, y: 0.2 }}
                >
                    <TouchableOpacity 
                        style={{paddingBottom: 6, paddingHorizontal: 6, paddingTop: 6}} 
                        onPress={() => navigation.goBack()}
                    >
                        <FontAwesomeIcon
                            icon={faChevronLeft}
                            style={{top: 8}}
                            size={24}
                            color='white'
                        />
                    </TouchableOpacity>                    
                    
                </LinearGradient>
                
            </ImageBackground>
        </View>
        <View style={[styles.viewEventContainer, {}]}>
            <Text 
                allowFontScaling 
                numberOfLines={2} 
                adjustsFontSizeToFit 
                style={{fontFamily: 'SemiBold', fontSize: 30, marginBottom: 10}}
            >
                {name}
            </Text>
            <Text 
                allowFontScaling 
                numberOfLines={3} 
                adjustsFontSizeToFit
                style={{fontFamily: 'Medium', fontSize: 22, marginBottom: 8}}
            >
                {venue}
            </Text>
            {/* <Text>
                {date}
            </Text> */}
            <Text style={{fontFamily: 'Regular', fontSize: 18}}>
                {desc}
            </Text>

                {/* <Text>henlo</Text>
                <Text>henlo</Text>
                <Text>{eventId}</Text>
                <Text>henlo</Text>
                <Text>henlo</Text>
                <Text>{JSON.stringify(route)}</Text> */}
        </View>
        </ScrollView>
    );
}

export default ViewEventScreen;

const styles = StyleSheet.create({
    viewEventContainer: {
        padding: 10,
        justifyContent: 'flex-start',
    },
});