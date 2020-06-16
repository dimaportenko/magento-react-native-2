/** @noflow */
import { combineReducers } from 'redux';
import storeConfig from './storeConfig';
import cart from './cart';

import type { StoreConfigRedux } from './storeConfig';
import type { CartReduxState } from '../types/state';

export type StateRedux = {
  storeConfig: StoreConfigRedux,
  cart: CartReduxState,
}

export default combineReducers({
  storeConfig,
  cart,
});
