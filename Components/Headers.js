import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

function HomeScreenHeader() {

    return (
        <View style={{
            height: 135,
            backgroundColor: 'rgba(44,54,63,0.95)',
            paddingBottom: 3
        }}>
            <View style={styles.header}>
                <View style={{ marginLeft: '8%' }}>
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

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 7 }}>
                <View>
                    <TouchableOpacity
                        style={[
                            styles.headerButton,
                            {
                                backgroundColor: '#fff',
                                marginLeft: 25
                            }
                        ]}
                    >
                        <Text
                            style={{
                                fontSize: 18,
                                color: '#595959' // 'rgba(44,54,63,1)'
                            }}
                        >
                            +  Post
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={[
                            styles.headerButton,
                            {
                                borderColor: 'rgba(255,255,255,0.97)',
                                marginLeft: 52,
                                padding: 9.2
                            }
                        ]}
                    >
                        <Text
                            style={{
                                fontSize: 16.5,
                                color: 'rgba(255,255,255,0.97)'
                            }}
                        >
                            Start a Jam Session
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

}

function EventScreenHeader() {

    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = (query) => setSearchQuery(query);

    const [searchbarRef, setSearchBarRef] = useState();

    var width = 288;
    var height = 46;

    if (searchbarRef !== undefined) {
        if (searchbarRef.isFocused()) {
            width = 320;
            height = 50;
        }
        else {
            width = 288;
            height = 46;
        }
    }

    return (
        <View style={{
            height: 72,
            backgroundColor: 'rgba(44,54,63,0.95)',
            paddingBottom: 3,
            marginBottom: 10
        }}>
            <View style={[
                styles.header,
                {
                    alignItems: 'center',
                    paddingTop: 2,
                    paddingBottom: 4,
                    marginLeft: 50
                }
            ]}>
                <Searchbar
                    ref={(ref) => setSearchBarRef(ref)}
                    style={[styles.searchbar, {width: width, height: height}]}
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
            </View>
        </View>
    );

}

function NotificationScreenHeader() {

    return (
        <View style={{
            height: 85,
            backgroundColor: 'rgba(44,54,63,0.95)',
            paddingBottom: 3,
            marginBottom: 10,
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
                    fontSize: 38,
                    fontWeight: 'bold',
                    letterSpacing: 0.4,
                    color: 'rgba(255,255,255,0.95)'
                }}>
                    Notifications
                </Text>
            </View>

        </View>
    );

}

function ConnectionScreenHeader() {

    return(
        <View style={{
            height: 85,
            backgroundColor: 'rgba(44,54,63,0.95)',
            paddingBottom: 3,
            marginBottom: 10,
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
                    fontSize: 38,
                    fontWeight: 'bold',
                    letterSpacing: 0.4,
                    color: 'rgba(255,255,255,0.95)'
                }}>
                    My Connections
                </Text>
            </View>

        </View>
    );
}

export { HomeScreenHeader, EventScreenHeader, NotificationScreenHeader, ConnectionScreenHeader };

const styles = StyleSheet.create({

    header: {
        height: 64,
        width: 400,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        paddingTop: 4,
        marginBottom: 1.7
    },

    searchbar: {
        marginTop: 10,
        backgroundColor: '#5D6E7E',
        borderRadius: 500
    },

    headerButton: {
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
        paddingLeft: 22,
        paddingRight: 22,
        zIndex: 4,
        borderRadius: 50,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: '#fff'
    }

});