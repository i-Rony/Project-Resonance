import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import Constants from 'expo-constants';
import GestureRecognizer from 'react-native-swipe-gestures';


const SettingScreen = ({navigation}) => {

    const [isActive, setActive] = useState('App');

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
                Settings
            </Text>
        </View>

    const activeColor = '#F098ED';
    const inactiveColor = '#000';
    const appColor = isActive == 'App'? activeColor : inactiveColor;
    const accColor = isActive == 'Acc' ? activeColor : inactiveColor;

    const navPanel = 
        <View style={styles.navPanelContainer}>
            <TouchableOpacity 
                style={styles.navPanelButton}
                onPress={() => setActive('App')}
            >
                <Text style={{ fontSize: 21, color: appColor }}>
                    App
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.navPanelButton}
                onPress={() => setActive('Acc')}
            >
                <Text style={{ fontSize: 21, color: accColor }}>
                    Account
                </Text>
            </TouchableOpacity>
        </View>;

    const appSettingsTitles = [
        {
            id: 1,
            name: 'General',
            link: '',
        }, 
        {
            id: 2,
            name: 'Display',
            link: '',
        }, 
        {
            id: 3,
            name: 'Audio',
            link: '',
        },
    ];

    const accountSettingsTitles = [
        {
            id: 1,
            name: 'General',
            link:'',
        },
        {
            id: 2,
            name: 'Security & Privacy',
            link: '',
        },
    ];

    const settingsTitles = isActive == 'App' ? appSettingsTitles : accountSettingsTitles;

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
                        {navPanel}
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
        marginTop: Constants.statusBarHeight,
    },
    
    headerContainer: {
        backgroundColor: '#A782D7',
        height: 270,
        alignItems: 'center',
        paddingBottom: 2,
        paddingTop: 40,
        // marginHorizontal: 1,
        borderBottomLeftRadius: 150,
        borderBottomRightRadius: 150,
        marginBottom: 76,
    },

    headerText: {
        flex: 1,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 34,
    },

    navPanelContainer: {
        backgroundColor: '#fff',
        borderRadius: 20,
        elevation: 5,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 32,
        width: 230,
        height: 52,
        flexDirection: 'row',
        position: 'absolute',
        top: 237,
    },

    navPanelButton: {
        alignItems: "center",
        justifyContent: "center",
    },

    eachSettingContainer: {
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 31,
    },

    eachSettingText: {
        color: 'rgba(0, 0, 0, 0.6)', 
        fontSize: 24,
    },

});