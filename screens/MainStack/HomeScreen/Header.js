import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import Constants from 'expo-constants';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const { width, height } = Dimensions.get("screen");

function HomeScreenHeader({ navigation }) {

    let [fontsLoaded] = useFonts({
        'Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        'SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
        'Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
        'Light': require('../assets/fonts/Montserrat-Light.ttf'),
        'Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;

    } else {

        return (
            <View style={{
                height: 60 + Constants.statusBarHeight,
                backgroundColor: 'rgba(231,90,124,0.45)',
                paddingBottom: 3,
                paddingTop: Constants.statusBarHeight,
            }}>
                <View style={styles.header}>
                    <Text style={{
                        fontFamily: 'SemiBold',
                        fontSize: 40,
                        marginLeft: width * 0.028,
                        letterSpacing: 0.5,
                        color: 'rgba(44,54,63,0.85)'
                    }}>
                        Clef
                    </Text>
                    <TouchableOpacity
                        style={[
                            styles.headerButton,
                            {
                                marginRight: width * 0.028,
                                left: width * 0.25,
                            }
                        ]}
                        onPress={() => navigation.navigate('CreatePost')}
                    >
                        <FontAwesomeIcon
                            icon={faPlus}
                            size={22}
                            color='rgba(44,54,63,0.85)'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.headerButton,
                            {
                                marginRight: width * 0.028,
                                left: 0
                            }
                        ]}
                        onPress={() => navigation.navigate('Chat')}
                    >
                        <FontAwesomeIcon
                            icon={faComments}
                            size={28}
                            color='rgba(44,54,63,0.85)'
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default HomeScreenHeader;

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

    searchbar: {
        marginTop: 10,
        backgroundColor: '#5D6E7E',
        borderRadius: 500
    },

    headerButton: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        top: 2,
        bottom: 2,
        paddingHorizontal: 10,
        zIndex: 4,
        marginVertical: 8,
    }

});
