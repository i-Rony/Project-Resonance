import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { faClock, faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

function ViewEventRNScreen({ route, navigation }) {

    const { eventId } = route.params;
    const { source, name, venue, date, desc } = route.params;

    return (
        <View style={{flex: 1, marginTop: Constants.statusBarHeight}}>
            <View style={{flex: 0.12, elevation: 5, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 12, paddingVertical: 2}}>
                {/*Style 1*/}
                <TouchableOpacity style={{marginHorizontal: -8, padding: 4}} onPress={() => navigation.goBack()}>
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        color='black'
                        size={24}
                    />
                </TouchableOpacity>

                <View style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end', position: 'absolute', right: 58, paddingHorizontal: 10}}>
                    <Text style={{fontSize: 14, fontFamily: 'Medium', paddingVertical: 1}}>Smoke and Mirrors</Text>
                    <Text style={{fontSize: 14, fontFamily: 'Light', paddingVertical: 1}}>Organizer</Text>
                </View>

                <Image source={source} style={{resizeMode: 'cover', width: 48, height: 48, borderRadius: 10}} />

                {/*Style 2*/}
                {/* <Image source={source} style={{resizeMode: 'cover', width: 48, height: 48, borderRadius: 10}} />

                <View style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', position: 'absolute', left: 58, paddingHorizontal: 10}}>
                    <Text style={{fontSize: 14, fontFamily: 'Medium', paddingVertical: 1}}>Smoke and Mirrors</Text>
                    <Text style={{fontSize: 14, fontFamily: 'Light', paddingVertical: 1}}>Organizer</Text>
                </View>
                
                <TouchableOpacity style={{marginHorizontal: 2}}>
                    <FontAwesomeIcon 
                        icon={faShare}
                        color='black'
                        size={24}
                    />
                </TouchableOpacity> */}
            </View>

            <View style={{flex: 0.44, elevation: 5, backgroundColor: 'white', paddingHorizontal: 12, borderBottomLeftRadius: 50, borderBottomRightRadius: 50}}>
                <Text adjustsFontSizeToFit allowFontScaling numberOfLines={2} style={{flex:0.26, fontFamily: 'Bold', fontSize: 26}}>
                    {name}
                </Text>

                <Text adjustsFontSizeToFit allowFontScaling numberOfLines={6} style={{flex:0.44,fontFamily: 'Regular', fontSize: 15, paddingVertical: 6, paddingBottom: 10}}>
                    {desc}
                </Text>

                <View style={{flex:0.3, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 12, alignItems: 'center', paddingTop: 0, borderTopWidth: 1, borderTopColor: 'rgba(0,0,0,0.1)'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>       
                        <FontAwesomeIcon 
                            icon={faClock}
                            size={34}
                            color='black'
                        />
                        <View style={{flexDirection: 'column', paddingLeft: 4}}>
                            <Text style={{fontFamily: 'Medium', fontSize: 16, letterSpacing: 0.5 }}>
                                1800
                            </Text>
                            <Text style={{fontFamily: 'Medium', fontSize: 11}}>
                                HOURS
                            </Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>       
                        <FontAwesomeIcon 
                            icon={faCalendarAlt}
                            size={34}
                            color='black'
                        />
                        <View style={{flexDirection: 'column', paddingLeft: 4}}>
                            <Text style={{fontFamily: 'Medium', fontSize: 13}}>
                                Mon, 31
                            </Text>
                            <Text style={{fontFamily: 'Medium', fontSize: 13}}>
                                August
                            </Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>       
                        <FontAwesomeIcon 
                            icon={faRupeeSign}
                            size={34}
                            color='black'
                        />
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{fontFamily: 'Medium', fontSize: 13}}>
                                Cost
                            </Text>
                            <Text style={{fontFamily: 'Medium', fontSize: 14}}>
                                FREE
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{flex: 0.24, elevation: 4, top: -40, backgroundColor: 'white', paddingHorizontal: 12, borderBottomLeftRadius: 50, borderBottomRightRadius: 50, justifyContent: 'space-evenly'}}>                
                <View style={{flex: 0.6, flexDirection: 'row', paddingTop: 36, alignItems: 'center' }}>
                    <Image source={source} style={{resizeMode: 'cover', width: 44, height: 44, borderRadius: 10, marginHorizontal: 3}} />
                    <Image source={source} style={{resizeMode: 'cover', width: 44, height: 44, borderRadius: 10, marginHorizontal: 3}} />
                    <Image source={source} style={{resizeMode: 'cover', width: 44, height: 44, borderRadius: 10, marginHorizontal: 3}} />
                    <Image source={source} style={{resizeMode: 'cover', width: 44, height: 44, borderRadius: 10, marginHorizontal: 3}} />
                    <View style={{backgroundColor: 'pink', width: 44, height: 44, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginHorizontal: 3}}>
                        <Text style={{fontFamily: 'Regular'}}>+4</Text>
                    </View>
                    <Text style={{fontFamily: 'Regular', marginHorizontal: 3}}>Members</Text>
                </View>

                {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity style={{backgroundColor: 'pink', width: 44, height: 44, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginHorizontal: 3}}>
                        <FontAwesomeIcon
                            icon={faPlus}
                            size={16}
                            color='black'
                        />
                    </TouchableOpacity>
                    
                    <Text style={{fontFamily: 'Medium', marginHorizontal: 3}}>
                        Join Event
                    </Text>
                </View> */}

                <TouchableOpacity style={{flex: 0.4, backgroundColor: 'pink', marginHorizontal: -12, borderBottomLeftRadius: 50, borderBottomRightRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontFamily: 'SemiBold', fontSize: 16}}>
                        Join Event
                    </Text>
                </TouchableOpacity>                
            </View>

            <View>

            </View>
        </View>
        // <View style={styles.viewEventContainer}>
        //     <Text>{`${source}`}</Text>
        //     <Text style={{color: 'black'}}>{name}</Text>
        //     <Text>{eventId}</Text>
        //     <Text>{venue}</Text>
        //     <Text>{date}</Text>
        //     <Text>{JSON.stringify(route)}</Text>
        // </View>
    );
}

export default ViewEventRNScreen;

const styles = StyleSheet.create({
    viewEventContainer: {
        padding: 10,
        marginTop: 20,
        justifyContent: 'flex-start',
    },
});