/**
 * @flow
 * Created by Dima Portenko on 16.06.2020
 */

import type { CartReduxState } from '../types/state';
import type { CartActions } from '../types/actions';

const initialState: CartReduxState = {
  loading: {
    details: false,
    create: false,
    addItem: false,
  },
  isAddingItem: false,
  cartId: null,
  details: null,
};

export default (state: CartReduxState = initialState, action: CartActions): CartReduxState => {
  switch (action.type) {
    case 'CART_LOADING': {
      const { loading } = state;
      loading[action.payload.key] = action.payload.value;
      return { ...state, loading: loading };
    }
    case 'CART_ID_ACTION': {
      return { ...state, cartId: action.payload };
    }
    case 'CART_DETAILS_ACTION': {
      return { ...state, details: action.payload, cartId: action.payload.id };
    }
    default:
      return state;
  }
};
