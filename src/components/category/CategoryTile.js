/**
 *
 * @flow
 */

import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import stc from 'string-to-color';
import type { Category } from '../../logic/types/magento';
import Sizes from '../../theme/dimens';
import { useCategoryTileImage } from '../../logic/category/useCategoryTile';

type Props = {
  category: Category,
};

export default (props: Props) => {
  const [backgroundColor, setBackgroundColor] = useState('#fff');
  const { category } = props;
  const { item, image } = useCategoryTileImage({ item: category });

  useEffect(() => {
    setBackgroundColor(stc(category.name));
  }, [category.name])

  return (
    <View style={[styles.container, { backgroundColor }]}>
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
