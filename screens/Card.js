import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Card(props){
    return(
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
            <View
                style={{
                    flexDirection: 'row',
                }}
            >
            <TouchableOpacity
                style={styles.like}
            >
                <View>
                    <Text>
                        Like
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.comment}
            >
                <View>
                    <Text>
                        Comment
                    </Text>
                </View>
            </TouchableOpacity>

            </View>
            
            
            
        </View>

    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 25,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,
        padding: 120
    },
    like: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: 'rgba(214,219,210,1)',
        borderRightWidth: 0.6,
        borderTopColor: 'rgba(214,219,210,1)',
        borderTopWidth: 1,
        paddingVertical: 10
    },
    comment: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftColor: 'rgba(214,219,210,1)',
        borderLeftWidth: 0.6,
        borderTopColor: 'rgba(214,219,210,1)',
        borderTopWidth: 1,
        paddingVertical: 10

    }
})