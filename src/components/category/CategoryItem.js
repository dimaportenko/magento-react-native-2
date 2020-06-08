/**
 * @flow
 */

import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, Card, Colors } from 'react-native-ui-lib';
import FastImage from 'react-native-fast-image';
import type { Category } from '../../logic/types/magento';
import { useCategoryTileImage } from '../../logic/category/useCategoryTile';
import { getCategoryColorByIndex } from '../../theme/colors';

type Props = {
  index: number,
  category: Category,
  right?: boolean,
  onPress(category: Category): void,
};

const BORDER_RADIUS = 15;
const IMAGE_WIDTH = 90;

export const CategoryItem = (props: Props) => {
  const [backgroundColor, setBackgroundColor] = useState('#fff');
  const [imageWrapStyle, setImageWrapStyle] = useState({});
  const { category, right, onPress } = props;
  const { image } = useCategoryTileImage({ item: category });

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
    setBackgroundColor(getCategoryColorByIndex(props.index));
  }, [props.index]);

  const renderImage = () => {
    if (image.url.length > 0) {
      return (
        <View style={[styles.imageWrap, imageWrapStyle]}>
          <FastImage
            source={{ uri: image.url }}
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
      onPress={() => { onPress(category); }}
      enableShadow
      useNative
      activeOpacity={1}
      activeScale={0.98}
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
