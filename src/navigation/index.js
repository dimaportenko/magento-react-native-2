/** @flow */
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as types from './types';
import { CategoriesScreen } from '../screens/category/CategoriesScreen';
import { CategoryScreen } from '../screens/category/CategoryScreen';
import { ProductScreen } from '../screens/product/ProductScreen';
import { LoadingScreen } from '../screens/home/LoadingScreen';

import type { Product, StoreConfig } from '../logic/types/magento';
import { useStoreConfig } from '../logic/storeConfig/useStoreConfig';
import { CartButton } from '../components/cart/CartButton';
import { useCart } from '../logic/cart/useCart';
import { CartScreen } from '../screens/checkout/CartScreen';

const Stack = createStackNavigator();

export const RootStack = () => {
  const storeConfig: ?StoreConfig = useStoreConfig();
  const { getCartDetails } = useCart();

  useEffect(() => {
    getCartDetails();
  }, []); // eslint-disable-line


  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => {
        return {
          headerRight: () => (
            <CartButton />
          ),
          headerBackTitleVisible: false,
          title: route?.params?.title,
        };
      }}
    >
      {
        (storeConfig === null)
        ? (<Stack.Screen
            name={types.HOME_SCREEN}
            component={LoadingScreen}
            options={({ navigation, route }) => {
              return {
                headerShown: false,
              };
            }}
          />)
        : (<>
            <Stack.Screen
              name={types.CATEGORIES_SCREEN}
              component={CategoriesScreen}
              options={({ navigation, route }) => ({
                title: route?.params?.title || 'Categories',
              })}
            />
            <Stack.Screen
              name={types.CATEGORY_SCREEN}
              component={CategoryScreen}
            />
            <Stack.Screen
              name={types.CART_SCREEN}
              component={CartScreen}
              options={({ navigation, route }) => ({
                title: route?.params?.title || 'Cart',
                headerRight: null,
              })}
            />
            <Stack.Screen
              name={types.PRODUCT_SCREEN}
              component={ProductScreen}
              options={({ navigation, route }) => {
                return {
                  headerShown: false,
                };
              }}
            />
          </>)
      }
    </Stack.Navigator>
  );
};
