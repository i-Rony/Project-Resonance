import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ConnectionCard({ conInfo }) {

    console.log(conInfo);

    const connectionStatus = ["unavailable", "available", "unavailable until"];
    const statusColor = ["red", "green", "yellow"];

    var name, status;

    if (conInfo.nickName !== undefined) {
        name =
            <View style={{ flex: 2, justifyContent: "center", paddingBottom: 5 }}>
                <Text style={styles.name}>{conInfo.nickName}</Text>
                <Text style={{ fontSize: 15, color: 'rgba(100, 100, 100, 0.9)' }}>|  {conInfo.name}</Text>
            </View>;
    }
    else {
        name =
            <View style={{ flex: 2, justifyContent: "center", paddingBottom: 5 }}>
                <Text style={styles.name}>{conInfo.name} </Text>
            </View>;
    }

    if (conInfo.statusInfo.status === 2) {
        status = 
            <View style={{ flex: 2, justifyContent: "center" }}>
            <Text style={[styles.status, { color: statusColor[conInfo.statusInfo.status]}]}>
                    {connectionStatus[conInfo.statusInfo.status]}: {conInfo.statusInfo.date}
                </Text>
            </View>;
    }
    else {
        status = 
            <View style={{ flex: 2, justifyContent: "center" }}>
            <Text style={[styles.status, { color: statusColor[conInfo.statusInfo.status] }]}>{connectionStatus[conInfo.statusInfo.status]} </Text>
            </View>;
    }

    var instruments = [];

    for (const instrument of conInfo.choice) {
        instruments.push(<Text style={styles.instruments}>{instrument}  </Text>);
    }

    const choice =
        <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center', marginTop: 4 }}>
            <Text style={styles.instruments}>Skilled at: </Text>
            <View style={{ flex: 2, flexDirection: 'row', justifyContent: "center" }}>
                <Text style={styles.instruments}>{instruments}</Text>
            </View>
        </View>


    return (
        <View style={styles.conCard}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 2, justifyContent: "center" }}>
                    {name}
                    {status}
                    {choice}
                </View>
                {/* <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity>

                    </TouchableOpacity>
                </View> */}
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
        color: '#000',
    },

    status: {
        fontSize: 16.2
        // fontWeight: "bold",
    },

    instruments: {
        fontSize: 17,
        // fontWeight: "bold",
        color: '#000'
    }

});