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
}

export type StoreConfig = {
  __typename: 'StoreConfig',
  base_media_url: string,
  secure_base_media_url: string,
}

export type ConfigurableVariant = {
  attributes: ConfigurableAttributeOption[],
  product: SimpleProduct,
}

export type ConfigurableAttributeOption = {
  label: string,
  code: string,
  value_index: number,
}

export type ProductDescription = {
  html: string
}

type ProductBase = {|
  id: number,
  name: string,
  sku: string,
  url_key: string,
  description: ProductDescription,
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
  media_gallery_entries: MediaGalleryEntry[],
|}

export type PriceAmountType = $PropertyType<$PropertyType<$PropertyType<ProductBase, 'price'>, 'regularPrice'>, 'amount'>

export type MediaGalleryEntry = {
  id: number,
  media_type: string,
  label: string,
  position: number,
  disabled: boolean,
  types: string[],
  file: string,

  // content: ProductMediaGalleryEntriesContent,
  // video_content: ProductMediaGalleryEntriesVideoContent,
}

export type SimpleProduct = {
  ...ProductBase,
  __typename: 'SimpleProduct',
}

export type SwatchType = 'ColorSwatchData' | 'TextSwatchData' | 'ImageSwatchData';

export type SwatchData = {
  __typename: SwatchType,
  value: string,
  thumbnail?: string,
}

export type ConfigurableProductOptionsValues = {
  value_index: number,
  label: string,
  default_label: string,
  store_label: string,
  use_default_value: boolean,
  swatch_data?: SwatchData,
}

export type ConfigurableProductOptions = {
  id: number,
  attribute_code: string,
  attribute_id: string,
  label: string,
  values: Array<ConfigurableProductOptionsValues>,
}

export type ConfigurableProduct = {
  ...ProductBase,
  __typename: 'ConfigurableProduct',
  configurable_options: ConfigurableProductOptions[],
  media_gallery_entries: MediaGalleryEntry[],
  variants: ConfigurableVariant[],
}

export type Product = ConfigurableProduct | SimpleProduct;
export type ProductType = $PropertyType<Product, '__typename'>;

export type MediaPathType = 'image-product' | 'image-category';

export type CartItem = {|
  id: string,
  quantity: number,
  product: Product,
  prices: {
    price: {
      currency: string,
      value: string
    }
  }
|}

export type Cart = {|
  __typename: 'Cart',
  id: string,
  items: Array<CartItem>,
|}
