import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import ConnectionSortModal from './ConnectionSortModal';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import Constants from 'expo-constants';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const { width, height } = Dimensions.get("screen");

function HomeScreenHeader() {

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
            backgroundColor: 'rgba(231,90,124,0.3)',
            paddingBottom: 3,
            paddingTop: Constants.statusBarHeight,
        }}>
            <View style={styles.header}>
                    <Text style={{
                        fontFamily: 'SemiBold',
                        fontSize: 40,
                        marginLeft: width*0.028,
                        letterSpacing: 0.5,
                        color: 'rgba(44,54,63,0.85)'
                    }}>
                        Clef
                    </Text>
                    <TouchableOpacity
                        style={[
                            styles.headerButton,
                            {
                                marginRight: width*0.028,
                                left: width * 0.25,
                            }
                        ]}
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
                                marginRight: width*0.028,
                                left: 0 
                            }
                        ]}
                    >
                        <FontAwesomeIcon
                            icon={faComments}
                            size={28}
                            color='rgba(44,54,63,0.85)'
                        />
                    </TouchableOpacity>
            </View>

            {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 7 }}>
                <View>
                    
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
            </View> */}
        </View>
    );
        }
}

function EventScreenHeader() {

    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = (query) => setSearchQuery(query);

    const [searchbarRef, setSearchBarRef] = useState();

    var w = width * 0.96;
    var h = 46;

    if (searchbarRef !== undefined) {
        if (searchbarRef.isFocused()) {
            w = width * 0.96;
            h = 50;
        }
        else {
            w = width * 0.96;
            h = 46;
        }
    }

    return (
        <View style={{
            height: 72,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(44,54,63,0.95)',
            paddingBottom: 3,
            marginBottom: 10
        }}>
            <View style={[
                styles.header,
                {
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: 2,
                    paddingBottom: 4,
                }
            ]}>
                <Searchbar
                    ref={(ref) => setSearchBarRef(ref)}
                    style={[styles.searchbar, { width: w, height: h }]}
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
} // end of NotificationScreenHeader


function ConnectionScreenHeader({ navigation }) {

    const [isSortModalActive, setSortModalActive] = useState(false);
    const [isFilterModalActive, setFilterModalActive] = useState(false);

    // const filterModal =
    //     <Modal
    //         animationOutTiming={500}
    //         animationOut={'slideOutUp'}
    //         isVisible={isFilterModalActive}
    //         hideModalContentWhileAnimating={true}
    //         style={{ alignItems: 'center', justifyContent: 'center' }}
    //     >
    //         <View style={connectionStyles.modalContainer}>
    //             <View style={connectionStyles.modalHeader}>
    //                 <Text
    //                     style={{
    //                         fontWeight: 'bold',
    //                         fontSize: 40,
    //                         color: 'rgba(231,90,124,0.9)',
    //                         marginLeft: 30,
    //                         marginTop: 6.6
    //                     }}
    //                 >
    //                     Filter
    //                 </Text>
    //             </View >
    //             <ScrollView style={connectionStyles.modalBody}>

    //             </ScrollView>
    //             <View style={connectionStyles.modalFooter}>
    //                 <TouchableOpacity
    //                     onPress={() => setFilterModalActive(false)}
    //                     style={[connectionStyles.modalFooterButtons, { backgroundColor: 'rgba(214,219,210,1)', borderBottomLeftRadius: 30 }]}
    //                 >
    //                     <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'rgba(44, 54, 63, 0.95)' }}>Cancel</Text>
    //                 </TouchableOpacity>
    //                 <TouchableOpacity
    //                     onPress={() => setFilterModalActive(false)}
    //                     style={[connectionStyles.modalFooterButtons, { backgroundColor: 'rgba(44, 54, 63, 0.95)', borderBottomRightRadius: 30 }]}
    //                 >
    //                     <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'rgba(214,219,210,1)' }}>Apply</Text>
    //                 </TouchableOpacity>
    //             </View>
    //         </View>
    //     </Modal>

    useEffect(() => {
        navigation.addListener('blur', () => {
            setSortModalActive(false);
            setFilterModalActive(false);
        })
    });

    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = (query) => setSearchQuery(query);

    // const [searchbarRef, setSearchBarRef] = useState();
    const [isSearchbarActive, setIsSearchbarActive] = useState(false);

    var lowerColumn;

    if (isSearchbarActive) {

        var w = width * 0.7;
        var h = 38;

        lowerColumn =
            <View style={[connectionStyles.lowerButtonsPanel, { justifyContent: 'flex-start' }]}>
                <Searchbar
                    // ref={setSearchBarRef}
                    style={[connectionStyles.searchbar, { width: w, height: h }]}
                    placeholder="Search Connections"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    onBlur={() => setIsSearchbarActive(false)}
                />
            </View>;
    }
    else {

        lowerColumn =
            <View style={connectionStyles.lowerButtonsPanel}>
                <View>
                    <TouchableOpacity
                        style={connectionStyles.lowerHeaderButtons}
                        onPress={() => setSortModalActive(true)}
                    >
                        <Text style={connectionStyles.sortAndFilter}>Sort</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={connectionStyles.lowerHeaderButtons}
                        onPress={() => setFilterModalActive(true)}
                    >
                        <Text style={connectionStyles.sortAndFilter}>Filter</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={connectionStyles.lowerHeaderButtons}
                        onPress={() => setIsSearchbarActive(true)}
                    >
                        <Text style={connectionStyles.sortAndFilter}>Search</Text>
                    </TouchableOpacity>
                </View>
            </View>;
    }

    return (
        <View style={{
            height: 100,
            marginBottom: 45
        }}>
            <ConnectionSortModal visibility={isSortModalActive} />
            {/* {filterModal} */}
            <View style={{
                height: 84,
                backgroundColor: 'rgba(44,54,63,0.95)',
                paddingBottom: 6
            }}>
                <View style={[
                    styles.header,
                    {
                        alignItems: 'center',
                        paddingTop: 2,
                        paddingBottom: 4,
                        marginLeft: 12,
                        marginTop: 26,
                        justifyContent: 'flex-start'
                    }
                ]}>
                    <View>
                        <Text style={{
                            fontSize: 35,
                            fontWeight: 'bold',
                            letterSpacing: 0.4,
                            color: 'rgba(220, 225, 216, 1)'
                        }}>
                            My Connections
                        </Text>
                    </View>
                    <TouchableOpacity style={connectionStyles.addConnButton} onPress={() => navigation.navigate('Explore')}>
                        <Text style={{ color: '', fontSize: 19, fontWeight: 'bold', color: 'rgba(231,90,124,0.76)' }}> + add </Text>
                    </TouchableOpacity>
                </View>
            </View>
            {lowerColumn}
        </View>
    );
}

export { HomeScreenHeader, EventScreenHeader, NotificationScreenHeader, ConnectionScreenHeader };

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

const connectionStyles = StyleSheet.create({

    addConnButton: {
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderRadius: 20,
        backgroundColor: 'rgba(214, 219, 210, 1)',
        borderWidth: 3,
        borderColor: 'rgba(231,90,124,0.76)',
        marginLeft: 26
    },

    lowerButtonsPanel: {
        flexDirection: 'row',
        backgroundColor: 'rgba(231,90,124,0.76)',
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        // borderTopColor: 'rgba(214, 219, 210, 1)',
        // borderTopWidth: 3.5
    },

    searchbar: {
        marginLeft: 8,
        backgroundColor: 'rgba(214,219,210,1)',
        borderRadius: 500,
        // tintColor: 'rgba(231,90,124,0.76)'
    },

    lowerHeaderButtons: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 4,
        borderRadius: 7,
        backgroundColor: 'rgba(214,219,210,1)',
        // paddingHorizontal: 18,
        paddingVertical: 6,
        // marginVertical: 1,
        width: 120
    },

    sortAndFilter: {
        fontWeight: 'bold',
        color: 'rgba(231,90,124,0.76)', // 'rgba(237,237,237,1)', 
        fontSize: 20
    },

    modalContainer: {
        marginVertical: 130,
        borderRadius: 30,
        padding: 10,
        flex: 1,
        justifyContent: 'center'
    },

    modalHeader: {
        height: 58,
        backgroundColor: 'rgba(214, 219, 210, 1)',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },

    modalBody: {
        width: 290,
        backgroundColor: 'rgba(231, 90, 124, 1)',
        paddingTop: 10
    },

    modalFooter: {
        // borderBottomLeftRadius: 30,
        // borderBottomRightRadius: 30,
        // backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    modalFooterButtons: {
        height: 47,
        width: 145,
        justifyContent: 'center',
        alignItems: 'center'
    }

});