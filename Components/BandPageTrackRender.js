import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { MusicBarLoader } from 'react-native-indicator';

export default function BandPageTrackRender(props) {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row', 
                elevation: 2, 
                backgroundColor: props.onplay ? 'pink' : 'white', 
                borderRadius: 22, 
                marginHorizontal: 3, 
                justifyContent: 'space-between', 
                paddingHorizontal: 8, 
                alignItems: 'center', 
                marginVertical: 4
            }}
        >
            <Text 
                numberOfLines={1} 
                ellipsizeMode='tail' 
                style={{
                    flex: 0.9, 
                    paddingHorizontal: 8, 
                    paddingVertical: 10, 
                    fontFamily: 'Medium', 
                    fontSize: 18
                }}
            >
                {props.name}
            </Text>
            <View style={{flex: 0.2, justifyContent: 'flex-end', alignItems: 'center'}}>
                {
                    props.onplay ? 
                    <MusicBarLoader 
                        color = '#000000'
                        betweenSpace = {0}
                        barHeight={25}
                        barWidth={4}
                    />
                    :
                    <></>
                }
            </View>
            {/* <View style={{flexDirection: 'row', justifyContent: 'space-evenly', flex: 0.2, margin: 4}}>
            <TouchableOpacity style = {{paddingVertical: 10, paddingHorizontal: 8}}>
                <FontAwesomeIcon
                icon={faPlay}
                size={20}
                color='black'
                />
            </TouchableOpacity>
            <TouchableOpacity style = {{paddingVertical: 10, paddingHorizontal: 8}}>
                <FontAwesomeIcon
                icon={faHeart}
                size={22}
                color='black'
                />
            </TouchableOpacity>
            </View>               */}
        </TouchableOpacity>
    )
}
