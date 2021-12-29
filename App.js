import React, {Component} from 'react';

import WelcomeScreen from './app/screens/WelcomeScreen';
import SignUpScreen from './app/screens/SignUpScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardScreen from './app/screens/DashboardScreen';
import FavoriteListScreen from './app/screens/FavoriteListScreen';
import MovieListScreen from './app/screens/MovieListScreen';
import GenreSelectScreen from './app/screens/GenreSelectScreen';
const Stack = createStackNavigator();
function NavStack() {
  return (
    <Stack.Navigator options={{headerShown: false}}>
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FavoriteListScreen"
        component={FavoriteListScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MovieListScreen"
        component={MovieListScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GenreSelectScreen"
        component={GenreSelectScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <NavStack />
      </NavigationContainer>
    );
  }
}
