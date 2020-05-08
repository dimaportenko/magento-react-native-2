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

type ConfigurableProductOptions = {
  id: number,
  attribute_code: string,
  attribute_id: string,
}

export type ConfigurableProduct = {
  ...ProductBase,
  __typename: 'ConfigurableProduct',
  configurable_options: ConfigurableProductOptions[],
  media_gallery_entries: MediaGalleryEntry[],
  variants: ConfigurableVariant[],
}

export type Product = ConfigurableProduct | SimpleProduct;
