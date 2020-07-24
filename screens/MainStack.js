import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();

const MainStack = () => (
    <Tab.Navigator
        initialRouteName="Home"
    >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="User" component={HomeScreen} />
        <Tab.Screen name="Events" component={HomeScreen} />
        <Tab.Screen name="Collabs" component={HomeScreen} />
        <Tab.Screen name="Find" component={HomeScreen} />
    </Tab.Navigator>
);


export default MainStack;