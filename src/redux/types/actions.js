/** @flow */
import type { Cart } from '../../logic/types/magento';

export type CartActions =
  | CartDetailsAction
  | CartIdAction
  | CartAddItemRequest;

export type CartAddItemRequest = {
  type: 'CART_ADD_ITEM_REQUEST'
}

export type CartIdAction = {
  type: 'CART_ID_ACTION',
  payload: string,
}

export type CartDetailsAction = {
  type: 'CART_DETAILS_ACTION',
  payload: Cart,
}
