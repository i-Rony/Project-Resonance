import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login';
import CreateAccount from './CreateAccount';
import StartScreen from './StartScreen';
import Doorway from './Doorway';
import ChoiceScreen from './ChoiceScreen';
import MainStack from './MainStack';
import TermsOfService from './TermsOfService';
import PrivacyPolicy from './PrivacyPolicy';
import ProfileScreen from './ProfileScreen';

const Stack = createStackNavigator();

const RootStackScreen = () => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name="StartScreen" component={StartScreen}/>
        <Stack.Screen name="Doorway" component={Doorway}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="CreateAccount" component={CreateAccount}/>
        <Stack.Screen name="ChoiceScreen" component={ChoiceScreen}/>
        <Stack.Screen name="MainStack" component={MainStack} />
        <Stack.Screen name="TermsOfService" component={TermsOfService} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
);


export default RootStackScreen;