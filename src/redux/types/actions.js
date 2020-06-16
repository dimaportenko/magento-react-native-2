/** @flow */

export type CartActions =
  | CartAddItemRequest;

export type CartAddItemRequest = {
  type: 'CART_ADD_ITEM_REQUEST'
}
