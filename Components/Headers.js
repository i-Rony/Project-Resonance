import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Carousel_EventScreen from './Carousel_EventScreen';
import { Searchbar } from 'react-native-paper';

function HomeScreenHeader({ filters }) {

    return (
        <View style={{
            height: 114,
            backgroundColor: 'rgba(44,54,63,0.95)',
            paddingBottom: 3
        }}>
            <View style={styles.header}>
                <View style={{ marginLeft: '14%' }}>
                    <Text style={{
                        fontSize: 40,
                        fontWeight: 'bold',
                        letterSpacing: 0.4,
                        color: 'rgba(231,90,124,1)'
                    }}>
                        Clef
                    </Text>
                </View>
            </View>

            {filters}

        </View>
    );

}

function EventScreenHeader({ filters }) {

    const images = [
        '../assets/1.png',
        '../assets/2.png',
        '../assets/3.png',
        '../assets/4.png',
        '../assets/5.png',
        '../assets/6.png',
        '../assets/kawaii.jpg'
    ];

    return (
        <View style={{
            height: 470,
            backgroundColor: 'rgba(44,54,63,0.95)',
            paddingBottom: 3
        }}>
            <View style={[styles.header, {alignItems: 'center', justifyContent: 'center'}]}>
                <Searchbar
                    style={styles.searchbar}
                    placeholder="Search"
                    value=""
                />
            </View>

            <View style={{ marginBottom: 30 }}>
                <Carousel_EventScreen images={images} />
            </View>

            {filters}

        </View>
    );

}

export { HomeScreenHeader, EventScreenHeader };

const styles = StyleSheet.create({

    header: {
        height: 64,
        width: 400,
        // backgroundColor: 'rgba(44,54,63,0.95)',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        paddingTop: 4,
        marginBottom: 1.7
    },

    searchbar: {
        width: 350,
        marginTop: 12,
        backgroundColor: '#5D6E7E',
        borderRadius: 500
    }

});