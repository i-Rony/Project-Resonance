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
            <LinearGradient
                style={styles.cardInnerContainer}
                colors={['rgba(220, 220, 220, 1)', 'rgba(225, 225, 225, 1)', 'rgba(230, 230, 230, 1)', 'rgba(225, 225, 225, 1)', 'rgba(220, 220, 220, 1)']}
                start={[0, 1]}
                end={[1, 0]}
            >
                <View>
                    <Text style={styles.dataContainer}>{notif.data}</Text>
                </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({

    cardOuterContainer: {
        flex: 1,
        width: width,
        marginVertical: 0.5,
        alignItems: 'center',        
        justifyContent: 'center',
    },

    cardInnerContainer: {
        marginVertical: 5,
        width: width - 18,
        paddingVertical: 32,
        paddingHorizontal: 17,
        justifyContent: 'center',
        borderRadius: 15,
    },

    dataContainer: {
        flex: 1,
        fontSize: 16,
    },

});