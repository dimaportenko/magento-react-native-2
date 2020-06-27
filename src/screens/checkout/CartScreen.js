/**
 * @flow
 * Created by Dima Portenko on 24.06.2020
 */
import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { Button, Colors, Spacings, Text, View } from 'react-native-ui-lib';
import { useSelector } from 'react-redux';
import type { CartReduxState } from '../../redux/types/state';
import { CartItem } from '../../components/cart/CartItem';
import { Price } from '../../components/price/Price';

export const CartScreen = () => {
  const { details, loading } = useSelector((state): CartReduxState => state.cart);

  if (!details && loading.details) {
    return (
      <View flex center>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!details || !details.items?.length) {
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
      <View bottom padding-page>
        <View row spread marginB-10>
          <Text>Subtotal</Text>
          <Price currency={details.prices.grand_total.currency} value={details.prices.grand_total.value} />
        </View>
        <Button
          label="Checkout"
          backgroundColor={Colors.primary}
          fullWidth
          // onPress={handleAddToCart}
        />
      </View>
    </View>
  );
};
