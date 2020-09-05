import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function ConnectionCard({ conInfo }) {

    // console.log(conInfo);

    const instrumentColor = {
        // 'guitar': 'rgba(200,54,54,0.85)',
        'acoustic guitar': 'rgba(163, 118, 5, 0.85)',
        'electric guitar': 'rgba(223, 36, 36, 0.85)',
        'violin': 'rgba(106, 5, 178, 0.85)',
        'piano': 'rgba(100, 45, 6, 0.85)',
        'saxophone': 'rgba(216 , 194, 3, 0.85)',
        'flute': 'rgba(4 , 186, 214, 0.85)',
        'drums': 'rgba(27, 173, 5, 0.85)',
        'keyboard': 'rgba(5, 60, 178, 0.85)',
        'voice': 'rgba(13, 1, 1, 0.85)',
        'moaning': 'rgba(250, 145, 26, 0.85)'
    };

    var name;

    if (conInfo.nickName !== undefined) {
        name =
            <View style={{ flex: 2, paddingBottom: 5 }}>
                <Text style={styles.name}>{conInfo.nickName}</Text>
                <Text style={{ fontSize: 15, color: 'rgba(100, 100, 100, 0.9)' }}>|  {conInfo.name}</Text>
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
            <></>;
    }
    else if (conInfo.statusInfo.status === 1) {
        var collabButton =
            <TouchableOpacity style={styles.collabButtonOn}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>Collab</Text>
            </TouchableOpacity>;
    }
    else {
        var collabButton =
            <View style={styles.collabButtonOff}>
                <Text style={{ fontSize: 12, color: "rgba(232, 163, 42, 1)" }}>until</Text>
                <Text style={{ fontSize: 12, color: "rgba(232, 163, 42, 1)" }}>{conInfo.statusInfo.date}</Text>
            </View>;
    }

    var instruments = [];

    for (const instrument of conInfo.choice) {
        instruments.push(<Text style={[styles.instruments, { backgroundColor: instrumentColor[instrument] }]}>{instrument}</Text>);
    }

    const choice =
        <ScrollView horizontal={true} style={{ flex: 2, flexDirection: 'row' }}>
            {instruments}
        </ScrollView>;

    const disconnectButton =
        <TouchableOpacity style={styles.disconnectButton}>
            <Text style={{ fontSize: 16, color: 'red' }}>disconnect</Text>
        </TouchableOpacity>;

    const renderRightActions = () =>
        <View style={styles.sectionRight}>
            <View style={{ marginBottom: 16 }}>{disconnectButton}</View>
            <View>{collabButton}</View>
        </View>

    const renderLeftActions = () =>
        <View style={styles.sectionRight}>
            <Text>Badges</Text>
        </View>

    return (
        <Swipeable renderLeftActions={renderLeftActions} renderRightActions={renderRightActions}>
            <View style={styles.conCard}>
                {/* <View style={{flex: 1, marginHorizontal: 10}}> */}
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
                        {name}
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        {choice}
                    </View>
                {/* </View> */}
            </View>
        </Swipeable>
    );
}

const styles = StyleSheet.create({

    conCard: {
        flex: 1,
        marginVertical: 6,
        // marginHorizontal: 8.7,
        padding: 8,
        paddingBottom: 20,
        alignItems: "center",
        justifyContent: "center",
        borderBottomColor: 'rgba(140, 140, 140, 0.6)',
        borderBottomWidth: 1.5,
        // borderRadius: 4,
    },

    sectionRight: {
        justifyContent: "center",
        marginVertical: 6,
        // marginHorizontal: 8.7,
        padding: 8,
        paddingBottom: 20,
        // backgroundColor: 'rgba(140, 140, 140, 0.24)',
        borderBottomColor: 'rgba(140, 140, 140, 0.6)',
        borderBottomWidth: 1.5
    },

    name: {
        fontSize: 25,
        fontWeight: "bold",
        color: '#2C363F',
    },

    instruments: {
        fontSize: 15.2,
        color: 'rgba(245, 245, 245, 1)',
        borderRadius: 30,
        paddingVertical: 2.5,
        paddingHorizontal: 12,
        marginRight: 10,
        marginBottom: 6
    },

    collabButtonOn: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: 'rgba(231,90,124,0.85)',
        // borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 27
    },

    collabButtonOff: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: 'rgba(100, 100, 100, 0.72)',
        // borderWidth: 2,
        paddingVertical: 6,
        paddingHorizontal: 18
    },

    disconnectButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        borderColor: 'red',
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 11.2,
        // marginBottom: 16
    }

});