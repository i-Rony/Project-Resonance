import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AnimatedTabBar from '@gorhom/animated-tabbar';

import HomeSVG from '../svg/HomeSVG';
import SearchSVG from '../svg/SearchSVG';
import ProfileSVG from '../svg/ProfileSVG';
import BellSVG from '../svg/BellSVG';

import HomeScreen from './HomeScreen';
import EventScreen from './EventScreen';
import NotificationScreen from './NotificationScreen';
import ProfileScreen from './ProfileScreen';
import CollabScreen from './CollabScreen';
import { DrawerContent } from './DrawerContent';

const tabs = {
    Home: { 
      labelStyle: {
        color: '#E75A7C'// '#2C363F'
      },
      icon: {
        component: HomeSVG,
        activeColor: 'rgba(231,90,124,1)' ,// 'rgba(255,255,255,1)',
        inactiveColor: 'rgba(214,219,210,1)' // 'rgba(0,0,0,1)',
      },
      background: {
        activeColor: 'rgba(214,219,210,1)',
        inactiveColor: 'rgba(255,255,255,0)'
      }
    }, // end of Home
    Notifications: { 
      labelStyle: {
        color: '#E75A7C'
      },
      icon: {
        component: BellSVG,
        activeColor: 'rgba(231,90,124,1)',
        inactiveColor: 'rgba(214,219,210,1)',
      },
      background: {
        activeColor: 'rgba(214,219,210,1)',
        inactiveColor: 'rgba(255,255,255,0)'
      }
    }, // end of Notifications
    Event: { 
      labelStyle: {
        color: '#E75A7C'
      },
      icon: {
        component: SearchSVG,
        activeColor: 'rgba(231,90,124,1)',
        inactiveColor: 'rgba(214,219,210,1)',
      },
      background: {
        activeColor: 'rgba(214,219,210,1)',
        inactiveColor: 'rgba(255,255,255,0)'
      }
    },
    User: { 
      labelStyle: {
        color: '#E75A7C'
      },
      icon: {
        component: ProfileSVG,
        activeColor: 'rgba(231,90,124,1)',
        inactiveColor: 'rgba(214,219,210,1)',
      },
      background: {
        activeColor: 'rgba(214,219,210,1)',
        inactiveColor: 'rgba(255,255,255,0)'
      }
    }, // end of User
  };  

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MainStack = () => (
    <Tab.Navigator
        initialRouteName="Home"
        tabBar={props => (
            <AnimatedTabBar tabs={tabs} {...props} />
          )}
          tabBarOptions={{
            style: {
              backgroundColor: '#2C363F'
            }
          }}
    >
        <Tab.Screen name="User" component={UserDrawer} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Event" component={EventScreen} />
        <Tab.Screen name="Notifications" component={NotificationScreen} />

    </Tab.Navigator>
);


export default MainStack;

const UserDrawer = () => (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} drawerContentOptions={{ gestureEnabled: true }} >
      <Drawer.Screen name='Profile' component={ProfileScreen} />
      <Drawer.Screen name='Collab' component={CollabScreen} />
    </Drawer.Navigator>

);