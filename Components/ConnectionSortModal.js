import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

export default function ConnectionSortModal({ visibility }) {

    const [isSortModalActive, setSortModalActive] = useState(visibility);
    const [sortOptions, setSortOptions] = useState([true, false, false, false, false, false]);
    const [tempSortOptions, setTempSortOptions] = useState([true, false, false, false, false, false]);

    var sortsInfo = {
        'From most interactions': {
            isActive: tempSortOptions[0]
        },
        'From least interactions': {
            isActive: tempSortOptions[1]
        },
        'Alphabetic': {
            isActive: tempSortOptions[2]
        },
        'Alphabetic Reverse': {
            isActive: tempSortOptions[3]
        },
        'No. of Instruments (asce)': {
            isActive: tempSortOptions[4]
        },
        'No. of Instruments (desc)': {
            isActive: tempSortOptions[5]
        }
    };

    for (const element in sortsInfo) {

        if (sortsInfo[element].isActive === true) {
            sortsInfo[element].backgroundColor = 'rgba(214, 219, 210, 1)';
            sortsInfo[element].borderRadius = 30;
            sortsInfo[element].textColor = 'rgba(44, 54, 63, 0.95)';
            sortsInfo[element].textWeight = 'bold';
        }
        else {
            sortsInfo[element].backgroundColor = 'rgba(214, 219, 210, 0)';
            sortsInfo[element].borderRadius = 0;
            sortsInfo[element].textColor = 'rgba(rgba(214, 219, 210, 1))';
            sortsInfo[element].textWeight = 'normal';
        }
    }

    const renderSorts = () => {

        return (
            <ScrollView style={styles.modalBody}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 3 }}>
                    <TouchableOpacity 
                        style={{ 
                            padding: 7, 
                            backgroundColor: sortsInfo['From most interactions'].backgroundColor, 
                            borderRadius: sortsInfo['From most interactions'].borderRadius 
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 21,
                                color: sortsInfo['From most interactions'].textColor,
                                fontWeight: sortsInfo['From most interactions'].textWeight
                            }}
                            onPress={() => setTempSortOptions([true, false, false, false, false, false])}
                        >
                            From most interactions
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 3 }}>
                    <TouchableOpacity
                        style={{
                            padding: 7,
                            backgroundColor: sortsInfo['From least interactions'].backgroundColor,
                            borderRadius: sortsInfo['From least interactions'].borderRadius
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 21,
                                color: sortsInfo['From least interactions'].textColor,
                                fontWeight: sortsInfo['From least interactions'].textWeight
                            }}
                            onPress={() => setTempSortOptions([false, true, false, false, false, false])}
                        >
                            From least interactions
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 3 }}>
                    <TouchableOpacity
                        style={{
                            padding: 7,
                            backgroundColor: sortsInfo['Alphabetic'].backgroundColor,
                            borderRadius: sortsInfo['Alphabetic'].borderRadius
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 21,
                                color: sortsInfo['Alphabetic'].textColor,
                                fontWeight: sortsInfo['Alphabetic'].textWeight
                            }}
                            onPress={() => setTempSortOptions([false, false, true, false, false, false])}
                        >
                            Alphabetic
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 3 }}>
                    <TouchableOpacity
                        style={{
                            padding: 7,
                            backgroundColor: sortsInfo['Alphabetic Reverse'].backgroundColor,
                            borderRadius: sortsInfo['Alphabetic Reverse'].borderRadius
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 21,
                                color: sortsInfo['Alphabetic Reverse'].textColor,
                                fontWeight: sortsInfo['Alphabetic Reverse'].textWeight
                            }}
                            onPress={() => setTempSortOptions([false, false, false, true, false, false])}
                        >
                            Alphabetic Reverse
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 3 }}>
                    <TouchableOpacity
                        style={{
                            padding: 7,
                            backgroundColor: sortsInfo['No. of Instruments (asce)'].backgroundColor,
                            borderRadius: sortsInfo['No. of Instruments (asce)'].borderRadius
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 21,
                                color: sortsInfo['No. of Instruments (asce)'].textColor,
                                fontWeight: sortsInfo['No. of Instruments (asce)'].textWeight
                            }}
                            onPress={() => setTempSortOptions([false, false, false, false, true, false])}
                        >
                            No. of Instruments (asce)
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 3 }}>
                    <TouchableOpacity
                        style={{
                            padding: 7,
                            backgroundColor: sortsInfo['No. of Instruments (desc)'].backgroundColor,
                            borderRadius: sortsInfo['No. of Instruments (desc)'].borderRadius
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 21,
                                color: sortsInfo['No. of Instruments (desc)'].textColor,
                                fontWeight: sortsInfo['No. of Instruments (desc)'].textWeight
                            }}
                            onPress={() => setTempSortOptions([false, false, false, false, false, true])}
                        >
                            No. of Instruments (desc)
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );

    }


    const applyNewSort = () => {
        setSortModalActive(false);
        setSortOptions(tempSortOptions);
        // use .then on the above statement send updated sortOptions to server and re-render the connections body component
    }

    return (
        <Modal
            animationOutTiming={500}
            animationOut={'slideOutUp'}
            isVisible={isSortModalActive}
            hideModalContentWhileAnimating={true}
            style={{ alignItems: 'center', justifyContent: 'center' }}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalHeader}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 40,
                            color: 'rgba(231,90,124,0.9)',
                            marginLeft: 30,
                            marginTop: 6.6
                        }}
                    >
                        Sort
                    </Text>
                </View>

                {renderSorts()}

                <View style={styles.modalFooter}>
                    <TouchableOpacity
                        onPress={() => { setSortModalActive(false); setTempSortOptions(sortOptions); }}
                        style={[styles.modalFooterButtons, { backgroundColor: 'rgba(214,219,210,1)', borderBottomLeftRadius: 30 }]}
                    >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'rgba(44, 54, 63, 0.95)' }}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => applyNewSort()}
                        style={[styles.modalFooterButtons, { backgroundColor: 'rgba(44, 54, 63, 0.95)', borderBottomRightRadius: 30 }]}
                    >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'rgba(214,219,210,1)' }}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );

}

const styles = StyleSheet.create({
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