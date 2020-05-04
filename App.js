/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { LoaderScreen, Colors } from 'react-native-ui-lib';
import { RootStack } from './src/navigation';
import { magentoConfig } from './magento.config';
import { themeInit } from './src/theme';
import { persistor, store } from './src/redux/store';

themeInit();

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: `${magentoConfig.baseUrl}graphql/`,
  }),
});

const Loading = () => (
  <LoaderScreen
    color={Colors.blue30}
    message="Loading..."
    overlay
  />
);

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <PersistGate
          loading={<Loading />}
          persistor={persistor}
        >
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </PersistGate>
      </ApolloProvider>
    </Provider>
  );
};

export default App;
