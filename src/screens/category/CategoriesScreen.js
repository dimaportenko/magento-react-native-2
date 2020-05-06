/** @flow */
import React, { useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { View } from 'react-native-ui-lib';
import { magentoConfig } from '../../../magento.config';
import { Categories } from '../../components/category/Categories';
import * as routes from '../../navigation/types';
import type { Category } from '../../logic/types/magento';


export const CategoriesScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [categoryId] = useState(route?.params?.categoryId || magentoConfig.rootCategoryId);

  const onCategoryPress = (category: Category) => {
    const route: string = category.children_count > 0
      ? routes.CATEGORIES_SCREEN
      : routes.CATEGORY_SCREEN;

    navigation.push(route, {
      categoryId: category.id,
      title: category.name,
    });
  };

  return (
    <View flex>
      <Categories categoryId={categoryId} onPress={onCategoryPress} />
    </View>
  );
};
