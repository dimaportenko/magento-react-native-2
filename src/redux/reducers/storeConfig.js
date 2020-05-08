/** @flow */
import type { StoreConfig } from '../../logic/types/magento';
import type { StoreActions } from '../actions/storeConfig';

export type StoreConfigRedux = {
  data: ?StoreConfig
};

const initialState: StoreConfigRedux = {
  data: null,
};

export default (state: StoreConfigRedux = initialState, action: StoreActions): StoreConfigRedux => {
  switch (action.type) {
    case 'STORE_CONFIG_DATA': {
      return { ...state, data: action.payload };
    }
    default:
      return state;
  }
};
