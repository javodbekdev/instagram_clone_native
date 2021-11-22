import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import MyAppScreen from './components/MyAppScreen';

const App = () => {
  return (
    <NavigationContainer>
      <MyAppScreen />
    </NavigationContainer>
  )
}

export default App