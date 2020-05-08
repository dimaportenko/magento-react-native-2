/**
 * @flow
 * Created by Dima Portenko on 08.05.2020
 */
import React from 'react';
import { View, Constants } from 'react-native-ui-lib';

import type { MediaGalleryEntry } from '../../logic/types/magento';
import { useProductImageCarousel } from '../../logic/product/useProductImageCarousel';

type Props = {
  entries: Array<MediaGalleryEntry>
};

export const MediaGallery = (props: Props) => {
  const { entries } = props;
  useProductImageCarousel({
    entries,
    imageWidth: Constants.screenWidth,
  });

  return (
    <View>

    </View>
  );
};