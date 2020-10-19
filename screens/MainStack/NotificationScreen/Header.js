import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("screen");

function NotificationScreenHeader() {

    return (
        <View style={{
            height: 78,
            // backgroundColor: 'rgba(44,54,63,0.95)',
            paddingBottom: 2,
            marginBottom: 4,
        }}>
            <View style={[
                styles.header,
                {
                    alignItems: 'center',
                    paddingTop: 2,
                    paddingBottom: 4,
                    marginLeft: 8,
                    marginTop: 34
                }
            ]}>
                <Text style={{
                    marginLeft: 5,
                    fontSize: 38,
                    fontWeight: 'bold',
                    letterSpacing: 0.5,
                    color: 'rgba(231,90,124,0.6)',
                }}>
                    Notifications
                </Text>
            </View>

        </View>
    );
} // end of NotificationScreenHeader

export default NotificationScreenHeader;

const styles = StyleSheet.create({

    header: {
        height: 64,
        width: width,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: 4,
        marginBottom: 1.7
    },

});
