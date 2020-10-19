import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import { Searchbar } from 'react-native-paper';


const { width, height } = Dimensions.get("screen");

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

export default EventScreenHeader;

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
