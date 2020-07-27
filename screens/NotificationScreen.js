'use strict';

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

class NotificationScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            backgroundColor: 'rgba(255,255,255,0)'
        };
    }

    onSwipeLeft(gestureState) {
        //this.setState({ myText: 'You swiped left!' });
        this.props.navigation.navigate('User');
    }

    onSwipeRight(gestureState) {
        //this.setState({ myText: 'You swiped right!' });
        this.props.navigation.navigate('Event');
    }

    onSwipe(gestureName, gestureState) {
        const { SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
        
        switch (gestureName) {
            case SWIPE_LEFT:
                this.props.navigation.navigate('User');
                break;
            case SWIPE_RIGHT:
                this.props.navigation.navigate('Event');
                break;
        }
    }

    render() {

        const config = {
            velocityThreshold: 0.5,
            directionalOffsetThreshold: 800
        };

        return (
            <GestureRecognizer
                onSwipe={(direction, state) => this.onSwipe(direction, state)}
                onSwipeLeft={(state) => this.onSwipeLeft(state)}
                onSwipeRight={(state) => this.onSwipeRight(state)}
                config={config}
                style={{
                    flex: 1,
                    backgroundColor: this.state.backgroundColor
                }}
            >
                <View
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        flex: 1
                    }}
                >
                    <TouchableOpacity
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                    <Text>
                        Notifications
                    </Text>
                    </TouchableOpacity>
                </View>
            </GestureRecognizer>
        );
    }
}

export default NotificationScreen;