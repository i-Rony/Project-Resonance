import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ConnectionCard({ conInfo, key }) {

    console.log(conInfo);

    const connectionStatus = ["unavailable", "available", "unavailable until"];
    const connectionStatusColor = ["rgba(208, 33, 10, 1)", "rgba(69, 188, 4, 1)", "rgba(232, 163, 42, 1"];

    var name;

    if (conInfo.nickName !== undefined) {
        name =
            <View style={{ flex: 2, justifyContent: "center", paddingBottom: 5, marginBottom: 16 }}>
                <Text style={styles.name}>{conInfo.nickName}</Text>
                <Text style={{ fontSize: 15, color: 'rgba(100, 100, 100, 0.9)' }}>|  {conInfo.name}</Text>
            </View>;
    }
    else {
        name =
            <View style={{ flex: 2, justifyContent: "center", paddingBottom: 5, marginBottom: 16 }}>
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
            <TouchableOpacity accessible={false} style={styles.collabButtonOff}>
                <Text style={{ fontSize: 12, color: "rgba(232, 163, 42, 1)"}}>until</Text>
                <Text style={{ fontSize: 12, color: "rgba(232, 163, 42, 1)" }}>{conInfo.statusInfo.date}</Text>
            </TouchableOpacity>;
    }

    var instruments = [];

    for (const instrument of conInfo.choice) {
        instruments.push(<Text style={styles.instruments}>{instrument}</Text>);
    }

    const choice =
        <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center', marginTop: 4 }}>
            <View style={{ flex: 2, flexDirection: 'row' }}>
                {instruments}
            </View>
        </View>

    const disconnectButton = 
        <TouchableOpacity style={styles.disconnectButton}>
            <Text style={{ fontSize: 16, color: 'red' }}>disconnect</Text>
        </TouchableOpacity>


    return (
        <View style={styles.conCard} key={key}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 2, justifyContent: "center" }}>
                    {name}
                    {choice}
                </View>
                <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                    {disconnectButton}
                    {collabButton}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    conCard: {
        flex: 1,
        margin: 5,
        padding: 8,
        paddingBottom: 20,
        alignItems: "center",
        justifyContent: "center",
        borderBottomColor: 'rgba(140, 140, 140, 0.6)',
        borderBottomWidth: 1.5,
        borderRadius: 10,
    },

    name: {
        fontSize: 25,
        fontWeight: "bold",
        color: '#2C363F',
    },

    instruments: {
        fontSize: 15.4,
        // fontWeight: "bold",
        color: 'rgba(245, 245, 245, 1)',
        borderRadius: 30,
        paddingVertical: 3.6,
        paddingHorizontal: 14,
        backgroundColor: 'rgba(231,90,124,0.85)',
        marginRight: 10,
        marginBottom: 6
    },

    collabButtonOn: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: 'rgba(231,90,124,0.85)',
        // borderWidth: 2,
        paddingVertical: 8.4,
        paddingHorizontal: 26
    },

    collabButtonOff: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: 'rgba(100, 100, 100, 0.8)',
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
        paddingHorizontal: 12,
        marginBottom: 16
    }

});