/**
 * @flow
 */

import React, { useState, useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Text, View, Card, Colors } from 'react-native-ui-lib';
import stc from 'string-to-color';
import type { Category } from '../../logic/types/magento';
import { useCategoryTileImage } from '../../logic/category/useCategoryTile';

type Props = {
  category: Category,
  right?: boolean,
  onPress(categoryId: number, title: string): void,
};

const BORDER_RADIUS = 15;
const IMAGE_WIDTH = 90;

export const CategoryItem = (props: Props) => {
  const [backgroundColor, setBackgroundColor] = useState('#fff');
  const [imageWrapStyle, setImageWrapStyle] = useState({});
  const { category, right, onPress } = props;
  const { item, image } = useCategoryTileImage({ item: category });

  useEffect(() => {
    if (right) {
      setImageWrapStyle({
        borderTopRightRadius: BORDER_RADIUS,
        borderBottomRightRadius: BORDER_RADIUS,
      });
    } else {
      setImageWrapStyle({
        borderTopLeftRadius: BORDER_RADIUS,
        borderBottomLeftRadius: BORDER_RADIUS,
      });
    }
  }, [right]);

  useEffect(() => {
    setBackgroundColor(stc(category.name));
  }, [category.name]);

  const renderImage = () => {
    if (image.url.length > 0) {
      return (
        <View style={[styles.imageWrap, imageWrapStyle]}>
          <Image
            source={{ uri: image.url }}
            height={'100%'}
            width={IMAGE_WIDTH}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      );
    }
  };

  const renderContent = () => (
    <View flex center>
      <Text categoryItemTitle>{category.name}</Text>
    </View>
  );

  const render = () => {
    if (right) {
      return (
        <React.Fragment>
          {renderContent()}
          {renderImage()}
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        {renderImage()}
        {renderContent()}
      </React.Fragment>
    );
  };

  return (
    <Card
      row
      borderRadius={BORDER_RADIUS}
      height={80}
      containerStyle={{ backgroundColor }}
      onPress={() => { onPress(category.id, category.name); }}
      enableShadow
      useNative
      activeOpacity={1}
      activeScale={1.04}
    >
      {render()}
    </Card>
  );
};

const styles = StyleSheet.create({
  imageWrap: {
    backgroundColor: Colors.white,
  },
  image: {
    width: IMAGE_WIDTH,
    height: '100%',
  },
});
