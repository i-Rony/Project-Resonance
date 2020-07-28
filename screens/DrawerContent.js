import React, { useState } from 'react';
import {
    View, StyleSheet, Text, TouchableOpacity
} from 'react-native';
import {
    Title,
    Caption,
    Paragraph,
    Drawer,
    Avatar
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { Collapsible } from 'react-native-collapsible';

import JohnDoe from '../assets/kawaii.jpg'

import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { faUserFriends, faUser, faHandshake, faHeartbeat, faHammer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

export function DrawerContent(props) {

    const [isCollapsed, setIsCollapsed] = useState(false);

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
                                        <Avatar.Image source={JohnDoe} size={120} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{
                                    flex: 1,
                                    borderColor: '#fff',
                                    borderBottomWidth: 1
                                }}>
                                    <Title style={styles.name}>John Doe</Title>
                                    <Caption style={styles.caption}><Text>1000{'\n'}Followers</Text></Caption>
                                </View>
                                {ProfilePicOptions()}
                                {/* <Collapsible collapsed={isCollapsed}>
                                        <Text style={{color: '#fff'}}>Options</Text>
                                    </Collapsible> */}
                            </View>
                        </View>

                        <Drawer.Section style={styles.drawerSection}>
                            <DrawerItem
                                inactiveTintColor='#ffffff' 
                                activeTintColor='rgba(0,0,0,1)'
                                activeBackgroundColor='rgba(255,255,255,0.9)'
                                icon={({ color, size }) => (
                                    <FontAwesomeIcon
                                        icon={faUser}
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="My Profile" labelStyle={{ fontFamily: 'Medium', fontSize: 16 }}

                                onPress={() => { props.navigation.navigate('My Profile') }}
                            />
                            <DrawerItem inactiveTintColor='#ffffff' activeBackgroundColor='#1976d2'
                                icon={({ color, size }) => (
                                    <FontAwesomeIcon
                                        icon={faUserFriends}
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Connections" labelStyle={{ fontFamily: 'Medium', fontSize: 16 }}

                                onPress={() => { props.navigation.navigate('Connections') }}
                            />
                            <DrawerItem inactiveTintColor='#ffffff' activeBackgroundColor='#1976d2'
                                icon={({ color, size }) => (
                                    <FontAwesomeIcon
                                        icon={faHandshake}
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Collabs" labelStyle={{ fontFamily: 'Medium', fontSize: 16 }}

                                onPress={() => { props.navigation.navigate('Collabs') }}
                            />
                            <DrawerItem inactiveTintColor='#ffffff' activeBackgroundColor='#1976d2'
                                icon={({ color, size }) => (
                                    <FontAwesomeIcon
                                        icon={faHeartbeat}
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Activities" labelStyle={{ fontFamily: 'Medium', fontSize: 16 }}

                                onPress={() => { props.navigation.navigate('Activities') }}
                            />
                            <DrawerItem inactiveTintColor='#ffffff' activeBackgroundColor='#1976d2'
                                icon={({ color, size }) => (
                                    <FontAwesomeIcon
                                        icon={faHammer}
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Settings" labelStyle={{ fontFamily: 'Medium', fontSize: 16 }}

                                onPress={() => { props.navigation.navigate('Settings') }}
                            />

                            {/* <DrawerItem inactiveTintColor='#fff' activeBackgroundColor='#1976d2'
                                icon={({ color, size }) => (
                                    <Ionicons name="md-information-circle-outline"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="About" labelStyle={{ fontFamily: 'Medium', fontSize: 16 }}
                                onPress={() => { props.navigation.navigate('About') }}
                            /> */}
                        </Drawer.Section>

                    </View>
                </DrawerContentScrollView>
                <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem inactiveTintColor='#fff'
                        icon={({ color, size }) => (
                            <Ionicons name="md-exit"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Sign Out" labelStyle={{ fontFamily: 'Medium', fontSize: 16 }}
                    />
                </Drawer.Section>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    name: {
        fontSize: 20,
        marginTop: 3,
        marginLeft: 20,
        fontFamily: 'SemiBold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 15,
        fontFamily: 'SemiBold',
        paddingBottom: 20
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
