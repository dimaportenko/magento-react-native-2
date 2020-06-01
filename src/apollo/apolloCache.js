/** @flow */
import { defaultDataIdFromObject } from '@apollo/client';

type Object = {
  __typename: string,
  id?: number,
}

export const MagentoGraphQLTypes = {
  BundleProduct: 'BundleProduct',
  Cart: 'Cart',
  ConfigurableProduct: 'ConfigurableProduct',
  DownloadableProduct: 'DownloadableProduct',
  GiftCardProduct: 'GiftCardProduct',
  GroupedProduct: 'GroupedProduct',
  ProductInterface: 'ProductInterface',
  SimpleProduct: 'SimpleProduct',
  VirtualProduct: 'VirtualProduct',
  SelectedConfigurableOption: 'SelectedConfigurableOption'
};

export const dataIdFromObject = (object: Object) => {
  switch (object.__typename) {
    // Store all implementations of ProductInterface with the same prefix,
    // and because we can't filter / query by id, use their url_key.
    case MagentoGraphQLTypes.BundleProduct:
    case MagentoGraphQLTypes.ConfigurableProduct:
    case MagentoGraphQLTypes.DownloadableProduct:
    case MagentoGraphQLTypes.GiftCardProduct:
    case MagentoGraphQLTypes.GroupedProduct:
    case MagentoGraphQLTypes.SimpleProduct:
    case MagentoGraphQLTypes.VirtualProduct:
      // Fallback to default handling if we don't have a url_key for the product (it won't be cached).
      return object.id
        ? `${MagentoGraphQLTypes.ProductInterface}:${object.id}`
        : defaultDataIdFromObject(object);
    // ID field is not based on selected values and is not unique; use unique value ID instead.
    case MagentoGraphQLTypes.SelectedConfigurableOption:
      return object.value_id
        ? `${MagentoGraphQLTypes.SelectedConfigurableOption}:${
          object.value_id
        }`
        : null;
    // Only maintain a single cart entry
    case MagentoGraphQLTypes.Cart:
      return 'Cart';
    // Fallback to default handling.
    default:
      return defaultDataIdFromObject(object);
  }
};
