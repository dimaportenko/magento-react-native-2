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

type ProductBase = {|
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
|}

export type SimpleProduct = ProductBase & {
  __typename: 'SimpleProduct',
}

type ConfigurableProductOptions = {
  id: number,
  attribute_code: string,
}

export type ConfigurableProduct = ProductBase & {
  __typename: 'ConfigurableProduct',
  configurable_options: ConfigurableProductOptions[],
}

export type Product = ConfigurableProduct | SimpleProduct;
