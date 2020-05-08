/** @noflow */
import { combineReducers } from 'redux';
import storeConfig from './storeConfig';

import type { StoreConfigRedux } from './storeConfig';

export type StateRedux = {
  storeConfig: StoreConfigRedux,
}

export default combineReducers({
  storeConfig,
});
