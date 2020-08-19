import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions, TouchableHighlight } from 'react-native';
import CardFlip from 'react-native-card-flip';
import { Audio } from 'expo-av';
// import Slider from '@react-native-community/slider';
import Slider from 'react-native-slider';
import AutoScrolling from 'react-native-auto-scrolling';

import { faHeart, faPlay, faShare, faPause, faStop } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import JohnDoe from '../assets/kawaii.jpg';

const {width, height} = Dimensions.get("screen");

const soundObject = new Audio.Sound();
var totalDuration;

// async function pauseAudio() {
//     soundObject.setStatusAsync({ shouldPlay: false });
// }

// async function playAudio() {
//     soundObject.setStatusAsync({ shouldPlay: true });
// }


export default function CardMusiq(props){

    useEffect(() => {
        
        Audio.setAudioModeAsync({
            staysActiveInBackground: true,
            playThroughEarpieceAndroid: false,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
            shouldDuckAndroid: true,
        });
        
    },
    
    async function loadAudio() {
        const track = await soundObject.loadAsync(require('../assets/Anthony_Lazaro_Coffee_Cup.mp3'));
        totalDuration = track.durationMillis;
        await soundObject.setIsLoopingAsync(true);
    }


    );

    async function startAudio(){
        await soundObject.playAsync();
        soundObject._onPlaybackStatusUpdate = (status) => {
            if(status.isLoaded){
                setValue({
                    value: status.positionMillis
                });
            }
        }
    }

    async function stopAudio() {
        try {
            await soundObject.unloadAsync();
        } catch (error) {
            console.log(error); // An error occurred!
        }
    }

    

    const _getSeekSliderPosition = () => {
        console.log(Math.floor(value/totalDuration));
        return Math.floor(value/totalDuration);
	}
    
    const [isFlipped, setIsFlipped] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [audioPosition, setAudioPosition] = useState(0);
    const [changingPosition, changePosition] = useState(0);
    const [value, setValue] = useState(0);

    const flipOver = () => setIsFlipped(!isFlipped);
    // const togglePlay = () => setIsPaused(!isPaused);
    const start = () => { setIsPaused(false); startAudio(); }
    const play = () => setIsPaused(false) // playAudio();
    const pause = () => setIsPaused(true) // pauseAudio();
    const stop = () => { setIsPaused(true); stopAudio(); }

    async function setPosition() {
        setAudioPosition(Math.floor(changingPosition));
        await soundObject.setPositionAsync(audioPosition);
        await soundObject.playAsync();
        console.log(audioPosition);
    } // Moment.utc(changingPosition * 1000).format("m:ss")

    soundObject.setStatusAsync({ shouldPlay: !isPaused });

    let [fontsLoaded] = useFonts({
        'Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        'SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
        'Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
        'Light': require('../assets/fonts/Montserrat-Light.ttf'),
        'Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    });     

    var audioButton =
        <TouchableOpacity
            onPress={() => pause()}
        >
            <FontAwesomeIcon
                style={{
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10
                }}
                icon={faPause}
                color='rgba(44, 54, 63, 0.834)'
                size={22}
            />
        </TouchableOpacity>

    if (isPaused) {
        audioButton = 
            <TouchableOpacity
                onPress={() => play()}
            >
                <FontAwesomeIcon
                    style={{
                        borderRadius: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 10
                    }}
                    icon={faPlay}
                    color='rgba(44, 54, 63, 0.834)'
                    size={22}
                />
            </TouchableOpacity>
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

        return (
            <View>
            <CardFlip 
                style={{ width: width * 0.97, height: height * 0.24 }} 
                ref={card => (this.card = card)}
                flipDirection='y'
            >
                <View style={styles.card}>
                    <View style={styles.cardContentHeader}>
                        <View style={styles.cardContent}>
                            <TouchableOpacity>
                                <Image source={JohnDoe} style={styles.headerImage}/>
                            </TouchableOpacity>
                            <View style={{width: 225}}>
                                <Text style={styles.headerText}>
                                    Dio Brando
                                </Text>
                                <Text 
                                    numberOfLines={1}
                                    ellipsizeMode='tail'
                                    style={styles.headerMusic}
                                >
                                    {props.children}
                                </Text>
                            </View>                    
                        </View>
                    </View>
                    <View style={styles.headerBottom}>
                        <TouchableOpacity>
                            <FontAwesomeIcon
                                style={{
                                    borderRadius: 50,
                                    justifyContent: 'flex-end',
                                    alignItems: 'flex-end',
                                    padding: 10
                                }}
                                icon={farHeart}
                                color= 'rgba(44, 54, 63, 0.834)'
                                size={22}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { this.card.flip(); flipOver(); start(); }}
                        >
                            <FontAwesomeIcon
                                style={{
                                    borderRadius: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: 10
                                }}
                                icon={faPlay}
                                color= 'rgba(44, 54, 63, 0.834)'
                                size={22}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesomeIcon
                                style={{
                                    borderRadius: 50,
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start',
                                    padding: 10
                                }}
                                icon= {faShare}
                                color= 'rgba(44, 54, 63, 0.834)'
                                size={22}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                
                {/* Audio Wave Player Below*/}
                
                <View style={styles.card}>
                    <View style={styles.cardContentHeader}>
                        <View style={styles.cardContent}>
                            <TouchableOpacity>
                                <Image source={JohnDoe} style={styles.headerImage}/>
                            </TouchableOpacity>
                            <View style={{width: 225}}>
                                <Text style={styles.headerText}>
                                    Dio Brando
                                </Text>
                                <AutoScrolling endPadding={30}
                                    style={{ marginLeft: 12 }}
                                >
                                <Text 
                                    numberOfLines={1}
                                    ellipsizeMode='tail'
                                    style={styles.headerMusic}
                                >
                                    {props.children}
                                </Text>
                                </AutoScrolling>
                            </View>                    
                        </View>
                        
                        <Slider
                            style={styles.slider}
                            minimumValue={0}
                            value={() => _getSeekSliderPosition()}
                            maximumValue={totalDuration} // {props.trackInfo.trackLength}
                            onValueChange={ (position) => changePosition(position) }
                            onSlidingComplete={() => setPosition()}
                            maximumTrackTintColor='rgba(231, 90, 124, 1)'
                            minimumTrackTintColor='rgba(44, 54, 63, 0.834)'
                            thumbTintColor='rgba(44, 54, 63, 0.834)'                           
                        />                        
                    </View>
                    <View style={styles.headerBottom}>
                        <TouchableOpacity>
                            <FontAwesomeIcon
                                style={{
                                    borderRadius: 50,
                                    justifyContent: 'flex-end',
                                    alignItems: 'flex-end',
                                    padding: 10
                                }}
                                icon={farHeart}
                                color= 'rgba(44, 54, 63, 0.834)'
                                size={22}
                            />
                        </TouchableOpacity>
                        {audioButton}
                        <TouchableOpacity
                            onPress={() => { this.card.flip(); flipOver(); stop(); }}
                        >
                            <FontAwesomeIcon
                                style={{
                                    borderRadius: 50,
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start',
                                    padding: 10
                                }}
                                icon= {faStop}
                                color= 'rgba(44, 54, 63, 0.834)'
                                size={22}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                </CardFlip>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        width: width * 0.95,
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
    },
    cardContentHeader: {
        zIndex: 1,
        backgroundColor: 'rgba(214, 219, 210, 0.6)',
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22
    },
    cardContent: {
        flexDirection: 'row',
        borderRadius: 22,
        padding: 12,
        paddingBottom: 12,
        paddingLeft: 0,
        backgroundColor: 'rgba(231, 90, 124, 0.82)',
    },
    headerImage: {
        width: 64,
        flexDirection: 'row',
        height: 64,
        overflow: 'visible',
        borderRadius: 50,
        padding: 2,
        marginLeft: width * 0.035
    },
    headerText: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        color: 'rgba(44, 54, 63, 0.834)',
        fontSize: 16,
        paddingTop: 9,
        marginTop: -4,
        fontFamily: 'Regular'
    },
    headerMusic: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        fontSize: 24,
        paddingTop: 4,
        color: 'rgba(44, 54, 63, 0.834)',
        fontFamily: 'Medium'
    },
    headerBottom: {
        zIndex: 0,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-evenly',
        backgroundColor: 'rgba(214, 219, 210, 0.6)',
        borderBottomLeftRadius: 22,
        borderBottomRightRadius: 22,
    },
    slider: {
        zIndex: 2,
        elevation: 8, 
        overflow: 'visible', 
        marginTop: -10,
        marginLeft: 6, 
        marginRight: 6, 
        marginBottom: -6
    }
});