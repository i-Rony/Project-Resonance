import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnimatedTabBar from '@gorhom/animated-tabbar';

import HomeSVG from '../svg/HomeSVG';
import LikeSVG from '../svg/LikeSVG';
import SearchSVG from '../svg/SearchSVG';
import ProfileSVG from '../svg/ProfileSVG';
// import HandshakeSVG from '../svg/HandshakeSVG';


import HomeScreen from './HomeScreen';
import UserScreen from './UserScreen';
import EventScreen from './EventScreen';
import NotificationScreen from './NotificationScreen';

const tabs = {

  Home: { // < Screen name
    labelStyle: {
      color: '#FFFFFF'
    },
    icon: {
      component: HomeSVG,
      activeColor: 'rgba(255,255,255,1)',
      inactiveColor: 'rgba(0,0,0,1)'
    },
    background: {
      activeColor: 'rgba(0,0,0,1)',
      inactiveColor: 'rgba(0,0,0,0)'
    }
  }, // end Home tab

  Notifications: { // < Screen name
    labelStyle: {
      color: '#FFFFFF'
    },
    icon: {
      component: LikeSVG,
      activeColor: 'rgba(255,255,255,1)',
      inactiveColor: 'rgba(0,0,0,1)'
    },
    background: {
      activeColor: 'rgba(0,0,0,1)',
      inactiveColor: 'rgba(0,0,0,0)'
    }
  }, // end Collabs tab

  Events: { // < Screen name
    labelStyle: {
      color: '#FFFFFF'
    },
    icon: {
      component: SearchSVG,
      activeColor: 'rgba(255,255,255,1)',
      inactiveColor: 'rgba(0,0,0,1)'
    },
    background: {
      activeColor: 'rgba(0,0,0,1)',
      inactiveColor: 'rgba(0,0,0,0)'
    }
  }, // end Events tab

  User: { // < Screen name
    labelStyle: {
      color: '#FFFFFF'
    },
    icon: {
      component: ProfileSVG,
      activeColor: 'rgba(255,255,255,1)',
      inactiveColor: 'rgba(0,0,0,1)'
    },
    background: {
      activeColor: 'rgba(0,0,0,1)',
      inactiveColor: 'rgba(0,0,0,0)'
    }
  }
};  // end tabs

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
    <Tab.Screen name="Events" component={EventScreen} />
    <Tab.Screen name="Notifications" component={NotificationScreen} />
  </Tab.Navigator>
);


export default MainStack;

const NavButtons = {
  labelstyle: {
    color: '#FFFFFF'
  },
  icon: {
    activeColor: '#FFFFFF',
    inactiveColor: '#000000'
  },
  background: {
    activeColor: '#000000',
    inactiveColor: 'rgba(223,215,243,0)'
  }
};