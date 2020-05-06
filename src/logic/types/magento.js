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

type ProductGeneral = {
  id: number,
  name: string,
  sku: string,
  description: {
    html: string,
  },
  small_image: {
    url: string,
  },
  price: {
    regularPrice: {
      amount: {
        currency: string,
        value: string
      }
    }
  },
}

export type SimpleProduct = {
  __typename: 'SimpleProduct',
  ...ProductGeneral,
}

type ConfigurableProductOptions = {
  id: number,
  attribute_code: string,
}

export type ConfigurableProduct = {
  __typename: 'ConfigurableProduct',
  ...ProductGeneral,
  configurable_options: ConfigurableProductOptions[],
}

export type Product = ConfigurableProduct | SimpleProduct;
