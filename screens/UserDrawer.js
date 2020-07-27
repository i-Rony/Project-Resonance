import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ProfileScreen from './ProfileScreen';

const Drawer = createDrawerNavigator();

export default function UserDrawer() {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Profile' component={ProfileScreen} />
        </Drawer.Navigator>
    );
}