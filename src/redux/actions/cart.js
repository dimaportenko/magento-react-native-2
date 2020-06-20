/** @flow */
import type { Cart } from '../../logic/types/magento';
import type { CartAddItemRequest, CartIdAction, CartDetailsAction } from '../types/actions';

export const cartAddItemRequestStart = (): CartAddItemRequest => ({
  type: 'CART_ADD_ITEM_REQUEST',
});

export const cartId = (id: string): CartIdAction => ({
  type: 'CART_ID_ACTION',
  payload: id,
});

export const cartDetails = (details: Cart): CartDetailsAction => ({
  type: 'CART_DETAILS_ACTION',
  payload: details,
});
