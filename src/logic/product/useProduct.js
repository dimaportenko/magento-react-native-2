/**
 * @flow
 * Created by Dima Portenko on 21.05.2020
 */
import React, { useMemo, useEffect } from 'react';
import { useApolloClient, useQuery } from '@apollo/client';

import type { Product } from '../types/magento';
import { MagentoGraphQLTypes } from '../../apollo/apolloCache';
import { PRODUCT_FRAGMENT } from '../../queries/productFragment';
import { GET_PRODUCT_DETAILS } from '../../queries/getProductDetails';
import { ApolloError } from '@apollo/client/errors/ApolloError';

type Props = {
  productId: number,
  urlKey: string,
};

type Result = {
  product: ?Product,
  loading: boolean,
  error: ?ApolloError,
};

const cachePrefix = MagentoGraphQLTypes.ProductInterface;

export const useProduct = (props: Props): Result => {
  const { productId, urlKey } = props;
  const apolloClient = useApolloClient();

  const productFromCache = useMemo(() => {
    try {
      return apolloClient.readFragment({
        id: `${cachePrefix}:${productId}`,
        fragment: PRODUCT_FRAGMENT,
      });
    } catch (e) {
      // The product is in the cache but it is missing some fields the fragment needs.
      return null;
    }
  }, [apolloClient, productId]);

  useEffect(() => {
    console.warn('productFromCache', productFromCache);

  }, [productFromCache])

  const { loading, error, data } = useQuery(GET_PRODUCT_DETAILS, {
    // Once we're able to remove the manual cache lookup,
    // this fetch policy can change to 'cache-and-network'.
    fetchPolicy: 'network-only',
    variables: {
      onServer: false,
      urlKey,
    }
  });

  const product = useMemo(() => {
    if (productFromCache) {
      return { ...productFromCache };
    }

    if (data) {
      const productFromNetwork = data.productDetail.items[0];
      return { ...productFromNetwork };
    }

    // The product isn't in the cache and we don't have a response from GraphQL yet.
    return null;
  }, [data, productFromCache]);

  return {
    product,
    loading,
    error,
  };
};
