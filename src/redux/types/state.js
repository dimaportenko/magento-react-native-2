/** @flow */
import type { Cart } from '../../logic/types/magento';

export type CartReduxState = {|
  isAddingItem: boolean,
  cartId: ?string,
  details: ?Cart,
|}
