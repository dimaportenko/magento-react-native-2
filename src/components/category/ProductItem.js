/**
 * @flow
 * Created by Dima Portenko on 06.05.2020
 */
import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { Text, View, Card, Image, Spacings, Constants } from 'react-native-ui-lib';
import _ from 'lodash';

import type { Product } from '../../logic/types/magento';

const COLUMN_SIZE = (Constants.screenWidth - 3 * Spacings.s4) / 2;
const BORDER_RADIUS = 10;

type Props = {
  product: Product
}

type ImageType = {
  uri: string,
  width: number,
  height: number,
  aspectRatio: number,
};

export const ProductItem = (props: Props) => {
  const { product } = props;
  const [image: ?ImageType, setImage] = useState(null);

  useEffect(() => {
    if (product) {
      Image.getSize(product.small_image.url,
        (width, height) => {
          setImage({
            uri: product.small_image.url,
            width,
            height,
            aspectRatio: width / height,
          });
        },
        () => {
          setImage({
            uri: product.small_image.url,
            width: COLUMN_SIZE,
            height: COLUMN_SIZE,
            aspectRatio: 1,
          });
        });
    }
  }, [product]);

  const renderImage = () => {
    if (image === null) {
      return (
        <View style={styles.loadContainer}>
          <View flex center>
            <ActivityIndicator size="small" />
          </View>
        </View>
      );
    }

    return (
      <Image
        style={[styles.image, { aspectRatio: image.aspectRatio }]}
        source={{ uri: image.uri }}
        width={COLUMN_SIZE}
      />
    );
  };

  return (
    <Card
      key={product.small_image.url}
      style={styles.card}
      onPress={_.noop}
      borderRadius={BORDER_RADIUS}
      enableShadow
      marginB-s4
      useNative
      marginL-s4
      activeScale={0.98}
      activeOpacity={1}
    >
      {renderImage()}
      <View margin-10 >
        <Text center productItemTitle>{product.name?.replace(/\&(.*?);/gm, '')}</Text>
        <Text center productItemTitle>
          {`${product.price.regularPrice.amount.currency} ${product.price.regularPrice.amount.value}`}
        </Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  loadContainer: {
    width: COLUMN_SIZE,
    height: COLUMN_SIZE,
  },
  card: {
    width: COLUMN_SIZE,
  },
  image: {
    width: COLUMN_SIZE,
    borderRadius: BORDER_RADIUS,
  },
});
