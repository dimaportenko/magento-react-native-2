/**
 * @flow
 * Created by Dima Portenko on 08.05.2020
 */
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { View } from 'react-native-ui-lib';

export const LoadingScreen = () => {
  return (
    <View flex center>
      <ActivityIndicator size="large" />
    </View>
  );
};
