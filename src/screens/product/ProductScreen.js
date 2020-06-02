/**
 * @flow
 * Created by Dima Portenko on 07.05.2020
 */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Colors, Constants, View, Text } from 'react-native-ui-lib';
import { useRoute } from '@react-navigation/native';
import { ProductDetails } from '../../components/product/ProductDetails';
import { useProduct } from '../../logic/product/useProduct';
import { LoadingScreen } from '../home/LoadingScreen';

import type { Product } from '../../logic/types/magento';

export const ProductScreen = () => {
  const route = useRoute();
  const [productFromNav] = useState((route.params.product: Product));

  const { product, error, loading } = useProduct({
    productId: productFromNav.id,
    urlKey: productFromNav.url_key,
  });

  if (error) {
    return (
      <View center>
        <Text>{error.message}</Text>
      </View>
    )
  }

  if (!product || loading) {
    return <LoadingScreen />
  }

  return (
    <ProductDetails product={product} />
  );
};
