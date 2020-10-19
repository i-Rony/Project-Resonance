import React, { useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const { width, height } = Dimensions.get("screen");

function CollabScreenHeader({ navigation }) {

    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = (query) => setSearchQuery(query);

    return (
        <View style={{
            height: 108,
            backgroundColor: 'white',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
        }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 34, fontFamily: 'SemiBold', color: 'rgba(231,90,124, 0.8)' }}>Collabs</Text>
                <TouchableOpacity style={{ padding: 6 }}>
                    <FontAwesomeIcon
                        icon={faPlus}
                        size={22}
                        color='rgba(231,90,124, 0.8)'
                    />
                </TouchableOpacity>
            </View>
            <Searchbar
                style={{
                    marginTop: 10,
                    marginLeft: 8,
                    marginBottom: 6,
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    borderRadius: 50,
                    width: width * 0.94,
                    height: 38
                }}
                placeholder="Search Collabs"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
        </View>
    )
}

export default CollabScreenHeader;