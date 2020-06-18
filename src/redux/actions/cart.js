/** @flow */
import type { CartAddItemRequest, CartIdAction } from '../types/actions';

export const cartAddItemRequestStart = (): CartAddItemRequest => ({
  type: 'CART_ADD_ITEM_REQUEST',
});

export const cartId = (id: string): CartIdAction => ({
  type: 'CART_ID_ACTION',
  payload: id,
});
