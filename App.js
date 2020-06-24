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
import FlashMessage from 'react-native-flash-message';
import { View } from 'react-native-ui-lib';

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
          <View flex>
            <NavigationContainer>
              <RootStack />
            </NavigationContainer>
            <FlashMessage position="top" />
          </View>
        </PersistGate>
      </ApolloProvider>
    </Provider>
  );
};

export default App;
