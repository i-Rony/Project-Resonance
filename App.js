import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './screens/RootStackScreen';

const App = () =>{
  return(
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}

export default App;