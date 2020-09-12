import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function ViewEventScreen({ navigation }) {
    return (
        <View style={styles.viewEventContainer}>
            <Text>henlo</Text>
            <Text>henlo</Text>
            <Text>henlo</Text>
            <Text>henlo</Text>
            <Text>henlo</Text>
            <Text>henlo</Text>
            <Text>henlo</Text>
            <Text>henlo</Text>
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