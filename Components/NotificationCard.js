import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { LinearGradient } from 'expo-linear-gradient';
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
        marginVertical: 2,
        padding: 8,
        alignItems: 'center',
        // backgroundColor: 'pink',        
        justifyContent: 'center',
    },

    cardInnerContainer: {
        marginVertical: 2,
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 15,
    },

    dataContainer: {
        flex: 1,
        fontSize: 18,
    },

});