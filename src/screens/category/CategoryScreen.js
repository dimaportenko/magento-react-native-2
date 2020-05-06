/** @flow */
import React, { useState } from 'react';
import { View, Text } from 'react-native-ui-lib';
import { magentoConfig } from '../../../magento.config';
import { useRoute } from '@react-navigation/native';


export const CategoryScreen = () => {
  const route = useRoute();
  const [categoryId] = useState(route?.params?.categoryId || magentoConfig.rootCategoryId);

  return (
    <View flex center>
      <Text>{categoryId}</Text>
    </View>
  );
};