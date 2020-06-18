/** @flow */

export type CartActions =
  | CartIdAction
  | CartAddItemRequest;

export type CartAddItemRequest = {
  type: 'CART_ADD_ITEM_REQUEST'
}

export type CartIdAction = {
  type: 'CART_ID_ACTION',
  payload: string,
}
