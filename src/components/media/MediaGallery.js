/**
 * @flow
 * Created by Dima Portenko on 08.05.2020
 */
import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Constants, Carousel } from 'react-native-ui-lib';
import FastImage from 'react-native-fast-image';

import type { MediaGalleryEntry } from '../../logic/types/magento';
import { useProductImageCarousel } from '../../logic/product/useProductImageCarousel';

type Props = {
  entries: Array<MediaGalleryEntry>
};

export const MediaGallery = (props: Props) => {
  const { entries } = props;
  const { urls } = useProductImageCarousel({
    entries,
    imageWidth: Constants.screenWidth,
  });

  return (
    <View>
      <Carousel
        containerStyle={{ height: Constants.screenWidth }}
        loop
        allowAccessibleLayout
        showCounter
      >
        {urls.map((image, index) => {
          return (
            <View key={index} flex bottom>
              <FastImage
                style={StyleSheet.absoluteFillObject}
                source={{ uri: image }}
                resizeMode="contain"
              />
            </View>
          );
        })}
      </Carousel>
    </View>
  );
};