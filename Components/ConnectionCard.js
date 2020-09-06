import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { LinearGradient } from 'expo-linear-gradient';

export default function ConnectionCard({ conInfo }) {

    const instrumentColor = {
        'Guitar': 'rgba(102, 248, 251, 1)',
        'Violin': 'rgba(247, 198, 255, 1)',
        'Piano': 'rgba(212, 255, 229, 1)',
        'Saxophone': 'rgba(23, 190, 152, 1)',
        'Flute': 'rgba(2, 159, 170, 1)',
        'Drums': 'rgba(251, 99, 118, 1)',
        'Synth': 'rgba(122, 229, 130, 1)',
        'Vocals': 'rgba(255, 255, 243, 1)',
        'Cello': 'rgba(255, 216, 156, 1)'
    };

    var name;

    if (conInfo.nickName !== undefined) {
        name =
            <View style={{ flex: 2, paddingBottom: 5 }}>
                <Text style={styles.name}>{conInfo.nickName}</Text>
                <Text style={{ fontFamily: 'Light', fontSize: 15, color: 'white' }}>|  {conInfo.name}</Text>
            </View>;
    }
    else {
        name =
            <View style={{ flex: 2, paddingBottom: 5 }}>
                <Text style={styles.name}>{conInfo.name} </Text>
            </View>;
    }

    if (conInfo.statusInfo.status === 0) {
        var collabButton = 
            <TouchableOpacity style={styles.collabButtonOn}>
                <Text style={{ fontSize: 18, fontFamily: 'Medium', color: 'rgba(231,90,124,0.85)', paddingHorizontal: 7}}>Chat</Text>
            </TouchableOpacity>;
    }
    else if (conInfo.statusInfo.status === 1) {
        var collabButton =
            <TouchableOpacity style={styles.collabButtonOn}>
                <Text style={{ fontSize: 18, fontFamily: 'Medium', color: 'rgba(231,90,124,0.85)' }}>Collab</Text>
            </TouchableOpacity>;
    }
    // else {
    //     var collabButton =
    //         <View style={styles.collabButtonOff}>
    //             <Text style={{ fontSize: 12, color: "rgba(232, 163, 42, 1)", fontFamily: 'Medium' }}>until</Text>
    //             <Text style={{ fontSize: 12, color: "rgba(232, 163, 42, 1)", fontFamily: 'Medium' }}>{conInfo.statusInfo.date}</Text>
    //         </View>;
    // }

    var instruments = [];

    for (const instrument of conInfo.choice) {
        instruments.push(<Text style={[styles.instruments, { color: instrumentColor[instrument], borderColor: instrumentColor[instrument], borderWidth: 1 }]}>{instrument}</Text>);
    }

    const choice =
        <ScrollView horizontal={true} style={{ flex: 2, flexDirection: 'row' }}>
            {instruments}
        </ScrollView>;

    // const disconnectButton =
    //     <TouchableOpacity style={styles.disconnectButton}>
    //         <Text style={{ fontSize: 16, color: 'rgba(44,54,63,0.5)', fontFamily: 'Regular' }}>Disconnect</Text>
    //     </TouchableOpacity>;

    const renderRightActions = () =>
        <TouchableOpacity style={styles.sectionRight}>
            <View>{collabButton}</View>
        </TouchableOpacity>

    const renderLeftActions = () =>
        <TouchableOpacity style={styles.sectionLeft}>                            
            <Text style={{fontFamily: 'Medium', color: 'rgba(44,54,63,0.8)'}}>Disconnect</Text>            
        </TouchableOpacity>

    return (
        <Swipeable renderLeftActions={renderLeftActions} renderRightActions={renderRightActions} overshootRight={false} overshootLeft={false} friction={2}>
            
            <LinearGradient
                colors={['rgba(231,90,124,1)', 'rgb(255, 255, 255)']}
                style={{
                    flex: 1, 
                    justifyContent: 'space-evenly',
                    borderBottomColor: '#fff',
                    borderBottomWidth: 0.5
                }}
                start={[0, 1]}
                end={[1, 0]}
            >
                <View style={styles.conCard}>
                {/* <View style={{flex: 1, marginHorizontal: 10}}> */}
                    <View style={{ flex: 0.3, flexDirection: 'column', alignItems: 'center' }}>
                        <Image source={{uri: conInfo.photo}} style={{borderRadius: 50, resizeMode: 'cover', width: 70, height: 70}} />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column',paddingLeft: 18 , justifyContent: 'space-evenly'}}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
                            {name}
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            {choice}
                        </View>
                    </View>
                    
                {/* </View> */}
                </View>
            </LinearGradient>
            
        </Swipeable>
    );
}

const styles = StyleSheet.create({

    conCard: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 2,
        // marginHorizontal: 8.7,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        // borderRadius: 4,
    },

    sectionLeft: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        flex: 1,
        backgroundColor: 'white'
    },

    sectionRight: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,      
        backgroundColor: 'white',
        // marginHorizontal: 8.7,
        padding: 8,
        // backgroundColor: 'rgba(140, 140, 140, 0.24)',
    },

    name: {
        fontSize: 22,
        fontFamily: 'SemiBold',
        color: 'rgba(44,54,63,0.8)', //'white'
    },

    instruments: {
        fontSize: 14,
        alignSelf: 'center',
        fontFamily: 'Medium',
        borderRadius: 30,
        paddingVertical: 2,
        paddingHorizontal: 12,
        marginRight: 10,
        marginBottom: 6
    },

    collabButtonOn: {
        alignItems: 'center',
        justifyContent: 'center',
        // borderRadius: 20,
        // backgroundColor: 'rgba(231,90,124,0.85)',
        // borderWidth: 2,
        // paddingVertical: 8,
        // paddingHorizontal: 27
    },

    collabButtonOff: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'rgba(232, 163, 42, 1)',
        // borderWidth: 2,
        paddingVertical: 4,
        paddingHorizontal: 18
    },

    disconnectButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        borderColor: 'rgba(44,54,63,0.5)',
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 11.2,
        // marginBottom: 16
    }

});