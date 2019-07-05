import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation'
import MainScreen from './Components/MainScreen'


export default function App() {
  return (
      <AppContainer />
  );
}

const AppStackNavigator = createStackNavigator({

  Main: {
    screen: MainScreen
  }
})

const AppContainer = createAppContainer(AppStackNavigator)