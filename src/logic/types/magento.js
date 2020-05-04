/**
 * @flow
 */

export type Category = {
  id: number,
  name: string,
  image: string,
  children_count: number,
  product_count: number,
  productImagePreview: {
    items: {
      small_image: {
        url: string
      }
    }
  }
};
