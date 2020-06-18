/**
 * @flow
 * Created by Dima Portenko on 18.06.2020
 */
import React from 'react';
import { View } from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useCartTrigger } from '../../logic/cart/useCartTrigger';

export const CartButton = () => {
  const data = useCartTrigger();

  return (
    <View marginR-10>
      <Icon name="shopping-cart" size={20}  />
    </View>
  );
};
