/**
 * @flow
 * Created by Dima Portenko on 18.06.2020
 */
import React, { useEffect } from 'react';
import { useCart } from './useCart';

type Props = {||};

type Result = {|
  test: null
|};

export const useCartTrigger = (props: Props): Result => {
  const { getCartDetails } = useCart();
  const result = {};


  useEffect(() => {
    // Passing apolloClient to wipe the store in event of auth token expiry
    // This will only happen if the user refreshes.
    getCartDetails();
  }, []);


  return {
    test: null,
  };
};
