import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

import FirstScreen from './Screens/FirstScreen';
import MainScreenNavigator from './Navigation/ScreenNavigator';

export default function App() {
  return (
      <MainScreenNavigator/> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
