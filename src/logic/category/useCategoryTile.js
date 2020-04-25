import { useMemo } from 'react';

export const useCategoryTileImage = props => {
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
        url: previewProduct.small_image,
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
