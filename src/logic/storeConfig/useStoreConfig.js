/**
 * @flow
 * Created by Dima Portenko on 08.05.2020
 */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useLazyQuery } from '@apollo/client';
import { GET_STORE_CONFIG } from '../../queries/getStoreConfig';
import { storeConfigData } from '../../redux/actions/storeConfig';

import type { StoreConfig } from '../types/magento';
import type { StateRedux } from '../../redux/reducers';

// TODO: return error and handle it
export const useStoreConfig = (): ?StoreConfig => {
  const storeConfig: ?StoreConfig = useSelector(
    (state: StateRedux): ?StoreConfig => (state.storeConfig.data)
  );
  const dispatch = useDispatch();

  const [runQuery, queryResponse] = useLazyQuery(GET_STORE_CONFIG);
  const { loading, error, data } = queryResponse;

  // Run the query immediately and every time id changes.
  useEffect(() => {
    runQuery();
  }, [runQuery]);

  useEffect(() => {
    if (data?.storeConfig) {
      dispatch(storeConfigData(data.storeConfig));
    }
  }, [data, dispatch, error, loading]);

  return storeConfig;
};
