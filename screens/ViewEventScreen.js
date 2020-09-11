import React from 'react';
import { View, StyleSheet } from 'react-native';

function ViewEventScreen({ navigation, eventId }) {
    return (
        <View style={styles.viewEventContainer}>
            <Text>{eventId}</Text>
        </View>
    );
}

export default ViewEventScreen;

const styles = StyleSheet.create({
    viewEventContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
});