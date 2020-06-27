/**
 * @flow
 * Created by Dima Portenko on 24.06.2020
 */
import React from 'react';
import { FlatList } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import { useSelector } from 'react-redux';
import type { CartReduxState } from '../../redux/types/state';
import { CartItem } from '../../components/cart/CartItem';

export const CartScreen = () => {
  const { details, loading } = useSelector((state): CartReduxState => state.cart);

  if (!details?.items?.length) {
    return (
      <View flex center>
        <Text>Cart is empty</Text>
      </View>
    );
  }

  const renderItem = (item, index) => (
    <CartItem item={item} />
  );

  return (
    <View flex>
      <FlatList
        data={details?.items}
        renderItem={({ item, index }) => renderItem(item, index)}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
