/**
 * @flow
 * Created by Dima Portenko on 18.06.2020
 */
import React, { useEffect } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { View, Badge } from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../theme/colors';
import { useSelector } from 'react-redux';
import type { CartReduxState } from '../../redux/types/state';
import { useNavigation } from '@react-navigation/core';
import * as routes from '../../navigation/types';

export const CartButton = () => {
  const { details, loading } = useSelector((state): CartReduxState => state.cart);
  const navigation = useNavigation();

  if (loading.details) {
    return (
      <View flex center marginR-10>
        <ActivityIndicator size="small" />
      </View>
    );
  }

  const onPress = () => {
    navigation.push(routes.CART_SCREEN);
  }

  return (
    <View marginR-10>
      <TouchableOpacity onPress={onPress}>
        <Icon name="shopping-cart" size={20} />
        <View abs style={{ top: -5, right: -5 }}>
          <Badge
            label={`${ details?.items?.length || 0}`}
            labelStyle={{ color: colors.controlTint }}
            size="small"
            backgroundColor={colors.control}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
