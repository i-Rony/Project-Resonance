import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('screen');

const PlaylistCard = () => {
    return (
        <View style={styles.poster}>
            
        </View>
    )
}

export default PlaylistCard;

const styles = StyleSheet.create({
    poster: {
        width: 160,
        height: 150,
        borderRadius: 22,
        elevation: 3,
        backgroundColor: 'rgba(255, 137, 175, 1)',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 0,
        marginTop: height * 0.05,
    }
  });
  