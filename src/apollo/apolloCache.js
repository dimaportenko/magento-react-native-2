/** @flow */

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

const productKeyFields = {
  keyFields: ['url_key', 'id'],
};

export const typePolicies = {
  // [MagentoGraphQLTypes.BundleProduct]: productKeyFields,
  // [MagentoGraphQLTypes.ConfigurableProduct]: productKeyFields,
  // [MagentoGraphQLTypes.DownloadableProduct]: productKeyFields,
  // [MagentoGraphQLTypes.GiftCardProduct]: productKeyFields,
  // [MagentoGraphQLTypes.GroupedProduct]: productKeyFields,
  // [MagentoGraphQLTypes.SimpleProduct]: productKeyFields,
  // [MagentoGraphQLTypes.VirtualProduct]: productKeyFields,
  [MagentoGraphQLTypes.SelectedConfigurableOption]: {
    keyFields: ['value_id'],
  },
  [MagentoGraphQLTypes.Cart]: () => 'Cart',
};
