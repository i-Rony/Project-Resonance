import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function HomeScreenFilters() {

    const [filters_status, setFilterStatus] = useState([true, false, false, false, false]);

    var filtersInfo = {
        AllPosts: {
            isActive: filters_status[0]
        },
        Events: {
            isActive: filters_status[1]
        },
        JamSessions: {
            isActive: filters_status[2]
        },
        Collabs: {
            isActive: filters_status[3]
        },
        Live: {
            isActive: filters_status[4]
        }
    }

    if (
        filtersInfo['Events'].isActive === false &&
        filtersInfo['JamSessions'].isActive === false &&
        filtersInfo['Collabs'].isActive === false &&
        filtersInfo['Live'].isActive === false
    ) {

        filtersInfo['AllPosts'].isActive = true;
    }

    const filterActiveColor = 'rgba(138,173,213,1)';
    const filterInactiveColor = 'rgba(255,255,255,1)';

    for (filter in filtersInfo) {

        if (filtersInfo[filter].isActive === true) {
            filtersInfo[filter].borderWidth = 1.5;
            filtersInfo[filter].textColor = filterActiveColor;
        }
        else {
            filtersInfo[filter].borderWidth = 0;
            filtersInfo[filter].textColor = filterInactiveColor;
        }
    }


    return(
        <View style={{ height: 50 }}>
            <ScrollView
                style={{ flexDirection: 'row' }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <TouchableOpacity
                    style={[styles.filters, { borderWidth: filtersInfo['AllPosts'].borderWidth }]}
                    onPress={() => setFilterStatus([true, false, false, false, false])}
                >
                    <Text style={{ color: filtersInfo['AllPosts'].textColor, fontSize: 15 }}>All Posts</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.filters, { borderWidth: filtersInfo['Events'].borderWidth }]}
                    onPress={() => {
                        setFilterStatus([false, !filters_status[1], filters_status[2], filters_status[3], filters_status[4]]);
                    }}
                >
                    <Text style={{ color: filtersInfo['Events'].textColor, fontSize: 15 }}>Events</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.filters, { borderWidth: filtersInfo['JamSessions'].borderWidth }]}
                    onPress={() => {
                        setFilterStatus([false, filters_status[1], !filters_status[2], filters_status[3], filters_status[4]]);
                    }}
                >
                    <Text style={{ color: filtersInfo['JamSessions'].textColor, fontSize: 15 }}>Jam Sessions</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.filters, { borderWidth: filtersInfo['Collabs'].borderWidth }]}
                    onPress={() => {
                        setFilterStatus([false, filters_status[1], filters_status[2], !filters_status[3], filters_status[4]]);
                    }}
                >
                    <Text style={{ color: filtersInfo['Collabs'].textColor, fontSize: 15 }}>Collabs</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.filters, { borderWidth: filtersInfo['Live'].borderWidth }]}
                    onPress={() => {
                        setFilterStatus([false, filters_status[1], filters_status[2], filters_status[3], !filters_status[4]]);
                    }}
                >
                    <Text style={{ color: filtersInfo['Live'].textColor, fontSize: 15 }}>Live</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );

}

function EventScreenFilters() {

    const [filters_status, setFilterStatus] = useState([true, false, false, false, false]);

    var filtersInfo = {
        All: {
            isActive: filters_status[0]
        },
        Events: {
            isActive: filters_status[1]
        },
        Trending: {
            isActive: filters_status[2]
        },
        Collabs: {
            isActive: filters_status[3]
        },
        People: {
            isActive: filters_status[4]
        }
    }

    if (
        filtersInfo['Events'].isActive === false &&
        filtersInfo['Trending'].isActive === false &&
        filtersInfo['Collabs'].isActive === false &&
        filtersInfo['People'].isActive === false
    ) {

        filtersInfo['All'].isActive = true;
    }

    const filterActiveColor = 'rgba(138,173,213,1)';
    const filterInactiveColor = 'rgba(255,255,255,1)';

    for (filter in filtersInfo) {

        if (filtersInfo[filter].isActive === true) {
            filtersInfo[filter].borderWidth = 1.5;
            filtersInfo[filter].textColor = filterActiveColor;
        }
        else {
            filtersInfo[filter].borderWidth = 0;
            filtersInfo[filter].textColor = filterInactiveColor;
        }
    }


    return(
        <View style={{ height: 50 }}>
            <ScrollView
                style={{ flexDirection: 'row' }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <TouchableOpacity
                    style={[styles.filters, { borderWidth: filtersInfo['All'].borderWidth }]}
                    onPress={() => setFilterStatus([true, false, false, false, false])}
                >
                    <Text style={{ color: filtersInfo['All'].textColor, fontSize: 15 }}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.filters, { borderWidth: filtersInfo['Events'].borderWidth }]}
                    onPress={() => {
                        setFilterStatus([false, !filters_status[1], filters_status[2], filters_status[3], filters_status[4]]);
                    }}
                >
                    <Text style={{ color: filtersInfo['Events'].textColor, fontSize: 15 }}>Events</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.filters, { borderWidth: filtersInfo['Trending'].borderWidth }]}
                    onPress={() => {
                        setFilterStatus([false, filters_status[1], !filters_status[2], filters_status[3], filters_status[4]]);
                    }}
                >
                    <Text style={{ color: filtersInfo['Trending'].textColor, fontSize: 15 }}>Trending</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.filters, { borderWidth: filtersInfo['Collabs'].borderWidth }]}
                    onPress={() => {
                        setFilterStatus([false, filters_status[1], filters_status[2], !filters_status[3], filters_status[4]]);
                    }}
                >
                    <Text style={{ color: filtersInfo['Collabs'].textColor, fontSize: 15 }}>Collabs</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.filters, { borderWidth: filtersInfo['People'].borderWidth }]}
                    onPress={() => {
                        setFilterStatus([false, filters_status[1], filters_status[2], filters_status[3], !filters_status[4]]);
                    }}
                >
                    <Text style={{ color: filtersInfo['People'].textColor, fontSize: 15 }}>People</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );

}

export { HomeScreenFilters, EventScreenFilters };

const styles = StyleSheet.create({

    filters: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(206,191,203,1)', // 'rgba(44,54,63,0.5)', 
        borderRadius: 20,
        borderColor: 'rgba(138,173,213,1)',
        padding: 18,
        margin: 5.4,
        marginTop: 9
    }
});