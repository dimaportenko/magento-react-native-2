/**
 *
 * @flow
 */

import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Image, Text, View, Card } from 'react-native-ui-lib';
import stc from 'string-to-color';
import type { Category } from '../../logic/types/magento';
import Sizes from '../../theme/dimens';
import { useCategoryTileImage } from '../../logic/category/useCategoryTile';

type Props = {
  category: Category,
  right?: boolean,
};

export default (props: Props) => {
  const [backgroundColor, setBackgroundColor] = useState('#fff');
  const { category, right } = props;
  const { item, image } = useCategoryTileImage({ item: category });

  useEffect(() => {
    setBackgroundColor(stc(category.name));
  }, [category.name]);

  const renderImage = () => {
    if (image.url.length > 0) {
      return (
        <Card.Image
          imageSource={{ uri: image.url }}
          height={'100%'}
          width={100}
          position={right ? 'right' : 'left'}
        />
      );
    }
  };

  const renderContent = () => (
    <View flex center>
      <Text>{category.name}</Text>
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
  }

  return (
    <Card
      row
      borderRadius={20}
      height={80}
      containerStyle={{ backgroundColor }}
      onPress={() => {}}
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
});
