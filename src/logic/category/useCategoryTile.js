/**
 * @flow
 */
import type { Category } from '../types/magento';

type Props = {
  item: Category
};

type CategoryTileResponse = {
  image: {
    url: string,
    type: string,
  },
  item: Category,
};

import { useMemo } from 'react';

export const useCategoryTileImage = (props: Props): CategoryTileResponse => {
  const { item } = props;
  const { image, productImagePreview } = item;

  const imageObj = useMemo(() => {
    const previewProduct = productImagePreview.items[0];
    if (image) {
      return {
        url: image,
        type: 'image-category',
      };
    } else if (previewProduct) {
      return {
        url: previewProduct.small_image?.url || '',
        type: 'image-product',
      };
    } else {
      return {
        url: '',
        type: 'image-category',
      };
    }
  }, [image, productImagePreview]);

  return {
    image: imageObj,
    item,
  };
};
