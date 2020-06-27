/**
 * @flow
 * Created by Dima Portenko on 27.06.2020
 */
import React, { useMemo } from 'react';
import { Text, View } from 'react-native-ui-lib';
import FastImage from 'react-native-fast-image';
import { flattenProduct } from '../../logic/utils/product/flattenProduct';
import { ProductOptions } from './ProductOptions';

import type { CartItem as CartItemType } from '../../logic/types/magento';
import { Price } from '../price/Price';

type ProductItemProps = {
  item: CartItemType,
}

export const CartItem = ({ item }: ProductItemProps) => {
  const product = useMemo(() => {
    return  flattenProduct(item);
  }, [item]);

  if (!product) {
    return null;
  }

  return (
    <View row margin-10>
      <FastImage
        style={{ width: 100, height: 100 }}
        source={{ uri: product.image }}
        resizeMode="contain"
      />
      <View>
        <Text>{product.name}</Text>
        <ProductOptions options={product.options} />
        <Price currency={product.currency} value={product.unitPrice} />
      </View>
    </View>
  );
};
