/**
 * @flow
 * Created by Dima Portenko on 13.05.2020
 */

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { magentoConfig } from '../../magento.config';


export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: `${magentoConfig.baseUrl}graphql/`,
  }),
});