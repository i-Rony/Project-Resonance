import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnimatedTabBar from '@gorhom/animated-tabbar';

import HomeSVG from '../svg/HomeSVG';
import SearchSVG from '../svg/SearchSVG';
import ProfileSVG from '../svg/ProfileSVG';
import BellSVG from '../svg/BellSVG';

import HomeScreen from './HomeScreen';
import UserScreen from './UserScreen';
import EventScreen from './EventScreen';
import NotificationScreen from './NotificationScreen';

const tabs = {
    Home: { 
      labelStyle: {
        color: '#ffffff'
      },
      icon: {
        component: HomeSVG,
        activeColor: 'rgba(255,255,255,1)',
        inactiveColor: 'rgba(0,0,0,1)',
      },
      background: {
        activeColor: 'rgba(0,0,0,1)',
        inactiveColor: 'rgba(255,255,255,0)'
      }
    }, // end of Home
    Notifications: { 
      labelStyle: {
        color: '#ffffff'
      },
      icon: {
        component: BellSVG,
        activeColor: 'rgba(255,255,255,1)',
        inactiveColor: 'rgba(0,0,0,1)',
      },
      background: {
        activeColor: 'rgba(0,0,0,1)',
        inactiveColor: 'rgba(255,255,255,0)'
      }
    }, // end of Notifications
    Event: { 
      labelStyle: {
        color: '#ffffff'
      },
      icon: {
        component: SearchSVG,
        activeColor: 'rgba(255,255,255,1)',
        inactiveColor: 'rgba(0,0,0,1)',
      },
      background: {
        activeColor: 'rgba(0,0,0,1)',
        inactiveColor: 'rgba(255,255,255,0)'
      }
    },
    User: { 
      labelStyle: {
        color: '#ffffff'
      },
      icon: {
        component: ProfileSVG,
        activeColor: 'rgba(255,255,255,1)',
        inactiveColor: 'rgba(0,0,0,1)',
      },
      background: {
        activeColor: 'rgba(0,0,0,1)',
        inactiveColor: 'rgba(255,255,255,0)'
      }
    }, // end of User
  };  

const Tab = createBottomTabNavigator();

const MainStack = () => (
    <Tab.Navigator
        initialRouteName="Home"
        tabBar={props => (
            <AnimatedTabBar tabs={tabs} {...props} />
          )}
    >
        <Tab.Screen name="User" component={UserScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Event" component={EventScreen} />
        <Tab.Screen name="Notifications" component={NotificationScreen} />

    </Tab.Navigator>
);


export default MainStack;