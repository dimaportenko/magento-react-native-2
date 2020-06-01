/**
 * @flow
 * Created by Dima Portenko on 18.05.2020
 */
import React, { useState, useEffect } from 'react';
import { getClient } from './client';

export const useApolloClient = () => {
  const [client, setClient] = useState(null);

  const setupClient = async () => {
    const _client = await getClient();
    setClient(_client);
  };

  useEffect(() => {
    setupClient();
  }, []);

  return {
    client,
  };
};
