// @flow
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as types from './types';
import { CategoriesScreen } from '../screens/category/CategoriesScreen';
import { CategoryScreen } from '../screens/category/CategoryScreen';

const Stack = createStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={types.CATEGORIES_SCREEN}
        component={CategoriesScreen}
        options={({ navigation, route }) => {
          return {
            title: route?.params?.title || 'Categories',
            headerBackTitleVisible: false,
          };
        }}
      />
      <Stack.Screen
        name={types.CATEGORY_SCREEN}
        component={CategoryScreen}
        options={({ navigation, route }) => {
          return {
            title: route?.params?.title || 'Categories',
            headerBackTitleVisible: false,
          };
        }}
      />
    </Stack.Navigator>
  );
};
