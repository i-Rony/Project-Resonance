import React from 'react';
import { View, Text, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("screen");

function ActivityScreenHeader() {

    return (
        <View style={{
            height: 80,
            marginBottom: 20
        }}>
            <View style={{
                // height: 60,
                marginTop: 40,
                paddingBottom: 2
            }}>
                <View style={[
                    styles.header,
                    {
                        alignItems: 'center',
                        // marginLeft: 12,
                        padding: 2,
                        marginHorizontal: 12,
                        paddingTop: 10,
                        justifyContent: 'flex-start'
                    }
                ]}>
                    <View>
                        <Text style={{
                            fontSize: 34,
                            fontFamily: 'SemiBold',
                            color: 'rgba(231,90,124, 0.8)'
                        }}>
                            My Activities
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default ActivityScreenHeader;

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
