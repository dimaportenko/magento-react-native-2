/** @flow */
import type { CartAddItemRequest } from '../types/actions';

export const cartAddItemRequestStart = (): CartAddItemRequest => ({
  type: 'CART_ADD_ITEM_REQUEST',
});
