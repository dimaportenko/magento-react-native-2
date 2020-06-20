/** @flow */
import type { Cart } from '../../logic/types/magento';
import type { CartLoadingKeys } from './state';

export type CartActions =
  | CartDetailsAction
  | CartIdAction
  | CartLoadingAction;

export type CartLoadingAction = {
  type: 'CART_LOADING',
  payload: {
    key: CartLoadingKeys,
    value: boolean,
  }
}

export type CartIdAction = {
  type: 'CART_ID_ACTION',
  payload: string,
}

export type CartDetailsAction = {
  type: 'CART_DETAILS_ACTION',
  payload: Cart,
}
