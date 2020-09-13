import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function ViewEventRNScreen({ route, navigation }) {

    const { eventId } = route.params;
    const { source, name, venue, date, desc } = route.params;

    return (
        <View style={styles.viewEventContainer}>
            <Text>{`${source}`}</Text>
            <Text style={{color: 'black'}}>{name}</Text>
            <Text>{eventId}</Text>
            <Text>{venue}</Text>
            <Text>{date}</Text>
            <Text>{JSON.stringify(route)}</Text>
        </View>
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