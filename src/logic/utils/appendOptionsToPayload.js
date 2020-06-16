/** @flow */
import { findMatchingVariant } from './findMatchingProductVariant';
import type { ConfigurableProduct, Product, ProductType } from '../types/magento';
import { isProductConfigurable } from './isProductConfigurable';

type Option = {|
  option_id: string,
  option_value: ?number,
|}

type Payload = {|
  item: Product,
  productType: ProductType,
  quantity: number,
  options?: Array<Option>,
  parentSku?: string,
|}

type Result = {
  ...Payload,
  options: Array<{ option_id: string, option_value: number }>
}

export const appendOptionsToPayload = (
  payload: Payload,
  optionSelections: Map<string, ?number>,
  _optionCodes: ?Map<string, string> = null
): Payload => {

  const { item } = payload;
  let optionCodes = _optionCodes;

  if (!isProductConfigurable(item)) {
    return payload;
  }
  const { variants } = item;

  if (!optionCodes) {
    optionCodes = new Map<string, string>();
    for (const option of item.configurable_options) {
      // There's a type difference in configurable option queries between
      // cart and product, casting to number is required. Can remove
      // cast once MC-29839 is resolved.
      optionCodes.set(option.attribute_id, option.attribute_code);
    }
  }

  const options = Array.from(optionSelections, ([id, value]) => ({
    option_id: id,
    option_value: value,
  }));

  const selectedVariant = findMatchingVariant({
    variants,
    optionCodes,
    optionSelections,
  });

  if (!selectedVariant) {return payload;}

  Object.assign(payload, {
    options,
    parentSku: item.sku,
    item: Object.assign({}, selectedVariant.product),
  });

  return payload;
};
