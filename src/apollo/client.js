/**
 * @flow
 * Created by Dima Portenko on 13.05.2020
 */

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { persistCache } from 'apollo-cache-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { magentoConfig } from '../../magento.config';
import { dataIdFromObject, possibleTypes } from './apolloCache';

const cache = new InMemoryCache({
  dataIdFromObject,
  possibleTypes
});

export const getClient = async () => {
  await persistCache({
    cache,
    storage: AsyncStorage,
  });

  const client = new ApolloClient({
    cache,
    link: new HttpLink({
      uri: `${magentoConfig.baseUrl}graphql/`,
    }),
  });

  // await client.resetStore();

  return client;
};
