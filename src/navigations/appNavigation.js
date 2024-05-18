import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../containers/homeScreen';
import MoviesScreen from '../containers/moviesScreen';
import AllMovies from '../components/allMovies';
import SearchScreen from '../containers/SearchScreen';
import {ALL_MOVIES, HOME_SCREEN, MOVIES_SCREEN, SEARCH} from './constants';
const Stack = createStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={HOME_SCREEN}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={MOVIES_SCREEN}
          component={MoviesScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ALL_MOVIES}
          component={AllMovies}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SEARCH}
          component={SearchScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation;
