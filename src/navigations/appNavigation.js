import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../containers/homeScreen';
import MoviesScreen from '../containers/moviesScreen';
import AllMovies from '../components/allMovies';
import SearchScreen from '../containers/SearchScreen';
const Stack = createStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MovieScreen"
          component={MoviesScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AllMovies"
          component={AllMovies}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation;
