import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'

import HomeScreen from './src/screens/homeScreen/HomeScreen'
import AboutScreen from './src/screens/aboutScreen/AboutScreen'

const AppNavigator = createStackNavigator({
	Home: HomeScreen,
	About: AboutScreen
}, {
	initialRouteName: 'Home'
})

export default createAppContainer(AppNavigator)