/**
 * @flow
 * Created by Dima Portenko on 08.05.2020
 */
import React, { useMemo } from 'react';
import type { MediaGalleryEntry, StoreConfig } from '../types/magento';
import { useSelector } from "react-redux";
import type { StateRedux } from '../../redux/reducers';
import { makeOptimizedUrl } from '../utils/makeOptimizedUrl';

type Props = {
  entries: Array<MediaGalleryEntry>,
  imageWidth: number,
};

type Result = {
  urls: Array<string>,
  sortedImages: Array<MediaGalleryEntry>,
}

const sortImages = (images: Array<MediaGalleryEntry> = []): Array<MediaGalleryEntry> =>
  images
    .filter(({ disabled }) => !disabled)
    .sort((a, b) => a.position - b.position);


export const useProductImageCarousel = (props: Props): Result => {
  const { entries, imageWidth } = props;
  const storeConfig: ?StoreConfig = useSelector(
    (state: StateRedux): ?StoreConfig => (state.storeConfig.data)
  );

  const { sortedImages, urls } : Result = useMemo(
    () => {
      const sortedImages = sortImages(entries);
      const urls = sortedImages.map(
        (image: MediaGalleryEntry) => makeOptimizedUrl(
          {
            file: image.file,
            type: 'image-product',
          },
          storeConfig?.secure_base_media_url || '',
            imageWidth,
          )
      );
      return { sortedImages, urls };
    },
    [entries, storeConfig, imageWidth]
  );

  return {
    sortedImages,
    urls,
  };
};
