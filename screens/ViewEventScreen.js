import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function ViewEventScreen({ route, navigation }) {

    const { eventId } = route.params;

    return (
        <View style={styles.viewEventContainer}>
            <Text>henlo</Text>
            <Text>henlo</Text>
            <Text>{eventId}</Text>
            <Text>henlo</Text>
            <Text>henlo</Text>
            <Text>{JSON.stringify(route)}</Text>
        </View>
    );
}

export default ViewEventScreen;

const styles = StyleSheet.create({
    viewEventContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});