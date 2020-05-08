/**
 * @flow
 * Created by Dima Portenko on 08.05.2020
 */
import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { View } from 'react-native-ui-lib';
import { useNavigation } from '@react-navigation/native';
import { useStoreConfig } from '../../logic/storeConfig/useStoreConfig';
import * as routes from '../../navigation/types';

import type { StoreConfig } from '../../logic/types/magento';

export const HomeScreen = () => {
  const storeConfig: ?StoreConfig = useStoreConfig();
  const navigation = useNavigation();

  useEffect(() => {
    if (storeConfig) {
      navigation.navigate(routes.CATEGORIES_SCREEN, {
        title: 'Root Category',
      });
    }
  }, [storeConfig, navigation]);

  return (
    <View flex center>
      <ActivityIndicator size="large" />
    </View>
  );
};
