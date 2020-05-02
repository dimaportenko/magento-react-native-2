/**
 * @flow
 */

export type Category = {
  id: number,
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
