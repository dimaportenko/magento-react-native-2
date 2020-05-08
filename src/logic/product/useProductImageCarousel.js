/**
 * @flow
 * Created by Dima Portenko on 08.05.2020
 */
import React, { useMemo } from 'react';
import type { MediaGalleryEntry } from '../types/magento';

type Props = {
  entries: Array<MediaGalleryEntry>,
  imageWidth: number,
};

const sortImages = (images: Array<MediaGalleryEntry> = []): Array<MediaGalleryEntry> =>
  images
    .filter(({ disabled }) => !disabled)
    .sort((a, b) => a.position - b.position);


export const useProductImageCarousel = (props: Props) => {
  const { entries } = props;

  const sortedImages = useMemo(
    () => sortImages(entries),
    [entries]
  );

  return {};
};
