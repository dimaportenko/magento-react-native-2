/**
 * @flow
 * Created by Dima Portenko on 06.05.2020
 */
import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import type { Product } from '../types/magento';

type Props = {
  categoryId: number,
  query: string,
};

type Result = {
  data: {
    products: {
      items: Product[]
    }
  },
  error: {
    message?: string
  },
  loading: boolean,
}

export const useCategory = (props: Props): Result => {
  const { categoryId, query } = props;

  const [runQuery, queryResponse] = useLazyQuery(query);
  const { loading, error, data } = queryResponse;

  // Run the query immediately and every time id changes.
  useEffect(() => {
    runQuery({
      variables: {
        id: categoryId,
        currentPage: 1,
        pageSize: 10,
        filters: { category_id:  { eq: categoryId } },
        sort: { position: 'ASC' }
      }
    });
  }, [categoryId, runQuery]);


  return {
    data,
    error,
    loading,
  };
};
