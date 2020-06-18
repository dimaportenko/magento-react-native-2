/**
 * @flow
 * Created by Dima Portenko on 16.06.2020
 */

import type { CartReduxState } from '../types/state';
import type { CartActions } from '../types/actions';

const initialState: CartReduxState = {
  isAddingItem: false,
  cartId: null,
};

export default (state: CartReduxState = initialState, action: CartActions): CartReduxState => {
  switch (action.type) {
    case 'CART_ADD_ITEM_REQUEST': {
      return { ...state, isAddingItem: true };
    }
    case 'CART_ID_ACTION': {
      return { ...state, cartId: action.payload };
    }
    default:
      return state;
  }
};
