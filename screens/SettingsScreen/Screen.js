import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import Constants from 'expo-constants';
import GestureRecognizer from 'react-native-swipe-gestures';


const SettingScreen = ({navigation}) => {

    let [fontsLoaded] = useFonts({
		'Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
		'SemiBold': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
		'Medium': require('../../assets/fonts/Montserrat-Medium.ttf'),
		'Light': require('../../assets/fonts/Montserrat-Light.ttf'),
		'Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
    });

    const header =
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
                My Settings
            </Text>
        </View>

    const settingsTitles = [
        {
            id: 1,
            name: 'General',
            link: '',
        }, 
        {
            id: 2,
            name: 'Privacy',
            link: '',
        }, 
        {
            id: 3,
            name: 'Account',
            link: '',
        }, 
        {
            id: 4,
            name: 'Display',
            link: '',
        }, 
        {
            id: 5,
            name: 'Audio',
            link: '',
        }, 
        {
            id: 6,
            name: 'Advanced',
            link: '',
        },
    ];

    const eachSetting = (item) => {
        return(
            <TouchableOpacity style={styles.eachSettingContainer}>
                <Text style={styles.eachSettingText}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        );
    }
    
    if (!fontsLoaded) {
		return <AppLoading />;

	} else {
        return(
            <GestureRecognizer>
                <SafeAreaView style={styles.outerContainer}>
                    <View style={{ flex: 1 }}>
                        {header}
                        {settingsTitles.map(eachSetting)}
                        {/* <FlatList
                            data={settingsTitles}
                            renderItem={(item) => eachSetting(item)}
                            keyExtractor={(item) => item.id}
                        /> */}
                    </View>
                </SafeAreaView>
            </GestureRecognizer>
        )
    }
}

export default SettingScreen;

const styles = StyleSheet.create({

    outerContainer: {
        marginTop: Constants.statusBarHeight 
    },
    
    headerContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: 72,
        alignItems: 'center',
        paddingBottom: 2,
        paddingTop: 17,
    },

    headerText: {
        flex: 1,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 36,
    },

    eachSettingContainer: {
        justifyContent: 'center',
        paddingVertical: 35,
        paddingLeft: 26,
        borderBottomColor: 'rgba(0, 0, 0, 0.2)',
        borderBottomWidth: 0.8,
    },

    eachSettingText: {
        color: 'rgba(0, 0, 0, 0.5)', 
        fontSize: 27,
    },

});