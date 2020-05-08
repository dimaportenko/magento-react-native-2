/** @flow */
import type { StoreConfig } from '../../logic/types/magento';

export type StoreConfigDataAction = { type: 'STORE_CONFIG_DATA', payload: StoreConfig }
export type StoreActions =
  | StoreConfigDataAction;

export const storeConfigData = (data: StoreConfig): StoreConfigDataAction => ({
  type: 'STORE_CONFIG_DATA',
  payload: data,
});

