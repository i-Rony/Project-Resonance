import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicatorBase } from 'react-native';
import { Title, Caption, Drawer, Avatar } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import JohnDoe from '../assets/kawaii.jpg';

import { faUserFriends, faUser, faHandshake, faHeartbeat, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

export function DrawerContent(props) {

    const [isCollapsed, setIsCollapsed] = useState(false);
    const [target_component, Activate] = useState('MyProfile');

    let [fontsLoaded] = useFonts({
        'Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        'SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
        'Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
        'Light': require('../assets/fonts/Montserrat-Light.ttf'),
        'Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    });

    const ProfilePicOptions = () => {

        if (isCollapsed) {
            return <></>;
        }

        return (
            <View style={{
                flex: 1,
                alignItems: 'flex-end',
                justifyContent: 'center',
                padding: 10,
                borderColor: '#fff',
                borderBottomWidth: 1
            }}>
                <TouchableOpacity style={{ marginBottom: 5 }}>
                    <Text style={{ color: '#fff' }}>
                        View Picture
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginBottom: 5 }}>
                    <Text style={{ color: '#fff' }}>
                        Edit Picture
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ color: '#fff' }}>
                        Delete Picture
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    const activeBgColor = 'rgba(255,255,255,0.95)';
    const activeTColor = 'rgba(0,0,0,1)';
    const inactiveBgColor = 'rgba(0,0,0,0)';
    const inactiveTColor = 'rgba(255,255,255,1)';

    var components = {
        MyProfile: {
            TColor: activeTColor,
            BgColor: activeBgColor
        },
        Connections: {
            TColor: inactiveTColor,
            BgColor: inactiveBgColor
        },
        Collabs: {
            TColor: inactiveTColor,
            BgColor: inactiveBgColor
        },
        Activities: {
            TColor: inactiveTColor,
            BgColor: inactiveBgColor
        },
        Settings: {
            TColor: inactiveTColor,
            BgColor: inactiveBgColor
        }
    };

    components[target_component].TColor = activeTColor;
    components[target_component].BgColor = activeBgColor;

    for (component in components) {
        if (component != target_component) {
            components[component].TColor = inactiveTColor;
            components[component].BgColor = inactiveBgColor;
        }
    }//end of for loop


    if (!fontsLoaded) {
        return <AppLoading />;
    } else {


        return (
            <View style={{ flex: 1 }}>
                <DrawerContentScrollView {...props}>
                    <View
                        style={{ flex: 1 }}
                    >
                        <View style={{ paddingLeft: 20 }}>
                            <View style={{ justifyContent: 'space-around', marginTop: 15, }}>
                                <View style={{
                                    flex: 1,
                                    marginLeft: 22,
                                    marginBottom: 15
                                }}>
                                    <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)}>
                                        <Avatar.Image source={JohnDoe} size={100} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{
                                    flex: 1,
                                    borderColor: '#fff',
                                    borderBottomWidth: 1
                                }}>
                                    <Title style={styles.name}>Kawaii Chan</Title>
                                    <Caption style={styles.caption}><Text>1000 Followers</Text></Caption>
                                </View>
                                {ProfilePicOptions()}
                                {/* <Collapsible collapsed={isCollapsed}>
                                        <Text style={{color: '#fff'}}>Options</Text>
                                    </Collapsible> */}
                            </View>
                        </View>

                        <Drawer.Section style={styles.drawerSection}>
                            <DrawerItem
                                inactiveTintColor={components.MyProfile.TColor}
                                inactiveBackgroundColor={components.MyProfile.BgColor}
                                icon={({ color, size }) => (
                                    <FontAwesomeIcon
                                        icon={faUser}
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="My Profile" labelStyle={{ fontFamily: 'Medium', fontSize: 16 }}

                                onPress={() => {
                                    Activate('MyProfile')
                                    props.navigation.navigate('My Profile')
                                }}
                            />
                            <DrawerItem
                                inactiveTintColor={components.Connections.TColor}
                                inactiveBackgroundColor={components.Connections.BgColor}
                                icon={({ color, size }) => (
                                    <FontAwesomeIcon
                                        icon={faUserFriends}
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Connections" labelStyle={{ fontFamily: 'Medium', fontSize: 16 }}

                                onPress={() => {
                                    Activate('Connections')
                                    props.navigation.navigate('Connections')
                                }}
                            />
                            <DrawerItem
                                inactiveTintColor={components.Collabs.TColor}
                                inactiveBackgroundColor={components.Collabs.BgColor}
                                icon={({ color, size }) => (
                                    <FontAwesomeIcon
                                        icon={faHandshake}
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Collabs" labelStyle={{ fontFamily: 'Medium', fontSize: 16 }}

                                onPress={() => {
                                    Activate('Collabs')
                                    props.navigation.navigate('Collabs')
                                }}
                            />
                            <DrawerItem
                                inactiveTintColor={components.Activities.TColor}
                                inactiveBackgroundColor={components.Activities.BgColor}
                                icon={({ color, size }) => (
                                    <FontAwesomeIcon
                                        icon={faHeartbeat}
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Activities" labelStyle={{ fontFamily: 'Medium', fontSize: 16 }}

                                onPress={() => {
                                    Activate('Activities')
                                    props.navigation.navigate('Activities')
                                }}
                            />
                            <DrawerItem
                                inactiveTintColor={components.Settings.TColor}
                                inactiveBackgroundColor={components.Settings.BgColor}
                                icon={({ color, size }) => (
                                    <FontAwesomeIcon
                                        icon={faCog}
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Settings" labelStyle={{ fontFamily: 'Medium', fontSize: 16 }}

                                onPress={() => {
                                    Activate('Settings')
                                    props.navigation.navigate('Settings')
                                }}
                            />
                            <DrawerItem inactiveTintColor='#fff'
                                icon={({ color, size }) => (
                                    <FontAwesomeIcon
                                        icon={faSignOutAlt}
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Sign Out" labelStyle={{ fontFamily: 'Medium', fontSize: 16 }}
                            />

                        </Drawer.Section>

                    </View>
                </DrawerContentScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    name: {
        fontSize: 20,
        marginTop: 3,
        marginLeft: 18,
        fontFamily: 'SemiBold',
        color: 'rgb(44,54,63)'
    },
    caption: {
        fontSize: 16,
        lineHeight: 15,
        fontFamily: 'SemiBold',
        paddingBottom: 20,
        marginLeft: 18,
        marginTop: 8,
        color: 'rgb(44,54,63)'
    },

    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        paddingLeft: 20,
    },
    paragraph: {
        fontSize: 15,
        lineHeight: 15,
        fontFamily: 'Medium',
        marginRight: 5,
    },
    drawerSection: {
        marginTop: 15,
        //backgroundColor: '#1976d2',
        paddingLeft: 20,
    },

    bottomDrawerSection: {
        paddingLeft: 20,
        marginBottom: 0,
        backgroundColor: '#1976d2'
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
