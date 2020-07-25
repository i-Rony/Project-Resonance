import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnimatedTabBar from '@gorhom/animated-tabbar';

import HomeSVG from '../svg/HomeSVG';
import LikeSVG from '../svg/LikeSVG';
import SearchSVG from '../svg/SearchSVG';
import ProfileSVG from '../svg/ProfileSVG';


import HomeScreen from './HomeScreen';
import UserScreen from './UserScreen';
import EventScreen from './EventScreen';
import CollabScreen from './CollabScreen';

const tabs = {
    
    Home: { // < Screen name
      labelStyle: {
        color: '#5B37B7',
      },
      icon: {
        component: HomeSVG,
        activeColor: 'rgba(91,55,183,1)',
        inactiveColor: 'rgba(0,0,0,1)',
      },
      background: {
        activeColor: 'rgba(223,215,243,1)',
        inactiveColor: 'rgba(223,215,243,0)',
      },
    }, // end Home tab

    Collabs: { // < Screen name
      labelStyle: {
        color: '#5B37B7',
      },
      icon: {
        component: LikeSVG,
        activeColor: 'rgba(91,55,183,1)',
        inactiveColor: 'rgba(0,0,0,1)',
      },
      background: {
        activeColor: 'rgba(223,215,243,1)',
        inactiveColor: 'rgba(223,215,243,0)',
      },
    }, // end Collabs tab

    Events: { // < Screen name
      labelStyle: {
        color: '#5B37B7',
      },
      icon: {
        component: SearchSVG,
        activeColor: 'rgba(91,55,183,1)',
        inactiveColor: 'rgba(0,0,0,1)',
      },
      background: {
        activeColor: 'rgba(223,215,243,1)',
        inactiveColor: 'rgba(223,215,243,0)',
      },
    }, // end Events tab

    Find: { // < Screen name
        labelStyle: {
            color: '#1194AA',
        },
        icon: {
            component: SearchSVG,
            activeColor: 'rgba(17,148,170,1)',
            inactiveColor: 'rgba(0,0,0,1)',
        },
        background: {
            activeColor: 'rgba(207,235,239,1)',
            inactiveColor: 'rgba(207,235,239,0)',
        },
    }, // end find tab

    User: { // < Screen name
      labelStyle: {
        color: '#1194AA',
      },
      icon: {
        component: ProfileSVG,
        activeColor: 'rgba(17,148,170,1)',
        inactiveColor: 'rgba(0,0,0,1)',
      },
      background: {
        activeColor: 'rgba(207,235,239,1)',
        inactiveColor: 'rgba(207,235,239,0)',
      },
    } // end User tab

  };  // end tabs

const Tab = createBottomTabNavigator();

const MainStack = () => (
    <Tab.Navigator
        initialRouteName="Home"
        tabBar={props => (
            <AnimatedTabBar tabs={tabs} {...props} />
          )}
    >
        <Tab.Screen name="Events" component={EventScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Collabs" component={CollabScreen} />
        <Tab.Screen name="User" component={UserScreen} />

    </Tab.Navigator>
);


export default MainStack;