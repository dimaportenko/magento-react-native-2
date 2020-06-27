/**
 * @flow
 * Created by Dima Portenko on 27.06.2020
 */

import type { CartItem, Product } from '../../types/magento';

type CartItemProduct = {|
  quantity: number,
  unitPrice: string,
  currency: string,
  image: string,
  name: string,
  options: Array<{
    id: string,
    option_label: string,
    value_id: string,
    value_label: string,
  }>,
|};

export const flattenProduct = (item: CartItem): CartItemProduct => {
  const {
    configurable_options: options = [],
    prices,
    product,
    quantity
  } = item;

  const { price } = prices;
  const { value: unitPrice, currency } = price;

  const { name, small_image } = product;
  const { url: image } = small_image;

  return { currency, image, name, options, quantity, unitPrice };
};
