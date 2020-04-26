/**
 * @flow
 */

export type Category = {
  name: string,
  image: string,
  productImagePreview: {
    items: {
      small_image: {
        url: string
      }
    }
  }
};
