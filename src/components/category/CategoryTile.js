/**
 *
 * @flow
 */

import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import type { Category } from '../../logic/types/magento';
import Sizes from '../../theme/dimens';
import { useCategoryTileImage } from '../../logic/category/useCategoryTile';

type Props = {
  category: Category,
};

export default (props: Props) => {
  const { category } = props;
  const { item, image } = useCategoryTileImage({ item: category });

  return (
    <View style={styles.container}>
      {
        image.url.length > 0 &&
        <Image source={{ uri: image.url }} style={styles.image} resizeMode="contain" />
      }
      <Text style={styles.text}>{category.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Sizes.MARGIN_HORIZONTAL,
  },
  image: {
    width: Sizes.WINDOW_WIDTH / 2 - Sizes.MARGIN_HORIZONTAL,
    height: Sizes.WINDOW_WIDTH / 2 - Sizes.MARGIN_HORIZONTAL,
  },
  title: {
    alignSelf: 'center',
    textAlign: 'center'
  },
});
