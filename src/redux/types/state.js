/** @flow */
import type { Cart } from '../../logic/types/magento';

export type CartLoadingKeys = 'details' | 'addItem' | 'create';

export type CartReduxState = {|
  isAddingItem: boolean,
  cartId: ?string,
  details: ?Cart,
  loading: {
    [key: CartLoadingKeys]: boolean,
  }
|}
