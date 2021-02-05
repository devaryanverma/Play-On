import React from 'react';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import FirstScreen from '../Screens/FirstScreen';
import LoginScreen from '../Screens/LoginScreen';

const MainScreenNavigator = createStackNavigator(
  {
    OpenScreen: LoginScreen,
    sec: FirstScreen
    
  } ,{
    defaultNavigationOptions:{
    headerTitle:''
  }}
 
  );

export default createAppContainer(MainScreenNavigator);
