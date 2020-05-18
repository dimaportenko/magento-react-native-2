/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/client';
import { RootStack } from './src/navigation';
import { themeInit } from './src/theme';
import { persistor, store } from './src/redux/store';
import { LoadingScreen } from './src/screens/home/LoadingScreen';
import { useApolloClient } from './src/apollo/useApolloClient';

themeInit();

const App: () => React$Node = () => {
  const { client } = useApolloClient();

  if (!client) {
    return <LoadingScreen />;
  }

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <PersistGate
          loading={<LoadingScreen />}
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
