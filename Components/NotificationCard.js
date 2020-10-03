import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { LinearGradient } from 'expo-linear-gradient';
import { rgba } from 'react-native-color-matrix-image-filters';

const { width, height } = Dimensions.get('screen');

export default function NotificationCard({ notif }) {

    return(
        <View style={styles.cardOuterContainer}>
            <View style={styles.cardInnerContainer}>
                <Text style={styles.dataContainer}>{notif.data}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    cardOuterContainer: {
        flex: 1,
        width: width,
        marginVertical: 0.5,
        // padding: 8,
        alignItems: 'center',        
        justifyContent: 'center',
    },

    cardInnerContainer: {
        marginVertical: 5,
        width: width - 18,
        paddingVertical: 32,
        paddingHorizontal: 17,
        justifyContent: 'center',
        backgroundColor: 'rgba(214, 214, 214, 1)',
        borderRadius: 15,
    },

    dataContainer: {
        flex: 1,
        fontSize: 16,
    },

});