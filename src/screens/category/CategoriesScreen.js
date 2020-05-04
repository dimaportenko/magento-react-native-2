/** @flow strict-local */
import React, { useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { View } from 'react-native-ui-lib';
import { magentoConfig } from '../../../magento.config';
import { Categories } from '../../components/category/Categories';
import * as routes from '../../navigation/types';


export const CategoriesScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [categoryId] = useState(route?.params?.categoryId || magentoConfig.rootCategoryId);

  const onCategoryPress = (catId: number, title: string) => {
    navigation.push(routes.CATEGORIES_SCREEN, { categoryId: catId, title });
  };

  return (
    <View flex>
      <Categories categoryId={categoryId} onPress={onCategoryPress} />
    </View>
  );
};
