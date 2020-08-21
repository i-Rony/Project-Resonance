import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ConnectionCard({ conInfo }) {

    console.log(conInfo);

    const connectionStatus = ["unavailable", "available", "available until"];

    var name, status;

    if (conInfo.nickName !== null) {
        name =
            <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                <Text style={styles.name}>{conInfo.nickName}</Text>
                <Text style={{ fontSize: 14, color: '#000' }}> | {conInfo.name}</Text>
            </View>;
    }
    else {
        name =
            <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                <Text style={styles.name}>{conInfo.name} </Text>
            </View>;
    }

    if (conInfo.statusinfo === 2) {
        status = 
            <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                <Text style={styles.status}>
                    {connectionStatus[conInfo.statusInfo[status]]} {conInfo.statusInfo[date]}
                </Text>
            </View>;
    }
    else {
        status = 
            <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                <Text style={styles.status}>{connectionStatus[conInfo.statusInfo[status]]} </Text>
            </View>;
    }

    var instruments = [];

    for (instrument in conInfo.choice) {
        instruments.push(<Text style={styles.instruments}>{instrument}  </Text>);
    }

    const choice =
        <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.instruments}>Skilled at: </Text>
            <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>{instruments}</View>
        </View>


    return (
        <View style={styles.conCard}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                    {name}
                    {status}
                    {choice}
                </View>
                <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity>

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    conCard: {
        flex: 1,
        margin: 5,
        alignItems: "center",
        justifyContent: "center",
        borderBottomColor: 'rgba(0, 0, 0, 0.7)',
        borderBottomWidth: 1
    },

    name: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#000'
    },

    status: {
        fontSize: 16,
        // fontWeight: "bold",
        color: '#000'
    },

    instruments: {
        fontSize: 16,
        // fontWeight: "bold",
        color: '#000'
    }

});