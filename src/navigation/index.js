/** @flow */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as types from './types';
import { CategoriesScreen } from '../screens/category/CategoriesScreen';
import { CategoryScreen } from '../screens/category/CategoryScreen';
import { ProductScreen } from '../screens/product/ProductScreen';
import { HomeScreen } from '../screens/home/HomeScreen';

import type { Product } from '../logic/types/magento';

const Stack = createStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={types.HOME_SCREEN}
        component={HomeScreen}
        options={({ navigation, route }) => {
          return {
            headerShown: false,
            headerBackTitleVisible: false,
          };
        }}
      />
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
      <Stack.Screen
        name={types.PRODUCT_SCREEN}
        component={ProductScreen}
        options={({ navigation, route }) => {
          const product: Product = route.params.product;
          return {
            title: product.name || 'Product',
            headerBackTitleVisible: false,
          };
        }}
      />
    </Stack.Navigator>
  );
};
