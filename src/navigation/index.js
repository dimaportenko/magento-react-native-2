import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import * as types from './types';

const Stack = createStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={types.HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};
