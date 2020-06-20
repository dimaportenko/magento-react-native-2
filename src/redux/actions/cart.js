/** @flow */
import type { Cart, Product } from '../../logic/types/magento';
import type { CartLoadingAction, CartIdAction, CartDetailsAction } from '../types/actions';

export const cartLoading = (payload: $PropertyType<CartLoadingAction, 'payload'>): CartLoadingAction => ({
  type: 'CART_LOADING',
  payload,
});

export const cartId = (id: string): CartIdAction => ({
  type: 'CART_ID_ACTION',
  payload: id,
});

export const cartDetails = (details: Cart): CartDetailsAction => ({
  type: 'CART_DETAILS_ACTION',
  payload: details,
});
