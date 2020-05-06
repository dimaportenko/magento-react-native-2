/** @flow */
import React from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { View, Text, AnimatableManager } from 'react-native-ui-lib';
import * as Animatable from 'react-native-animatable';
import { useCategoryList } from '../../logic/category/useCategoryList';
import { GET_CATEGORY_LIST } from '../../queries/getCategoryList';
import { CategoryItem } from './CategoryItem';

import type { Category } from '../../logic/types/magento';

type Props = {
  categoryId: number,
  onPress(category: Category): void,
};

export const Categories = (props: Props) => {
  const { childCategories, error, loading } = useCategoryList({
    query: GET_CATEGORY_LIST,
    id: props.categoryId,
  });

  if (loading) {
    return (
      <View flex center>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View flex center>
        <Text>{error.message}</Text>
      </View>
    );
  }

  const renderItem = (item: Category, index: number) => {
    const animationProps = AnimatableManager.getEntranceByIndex(index);
    return (
      <Animatable.View key={index} {...animationProps}>
        <View marginV-7>
          <CategoryItem category={item} right={!!(index % 2)} onPress={props.onPress} />
        </View>
      </Animatable.View>
    );
  };

  const keyExtractor = (item: Category, index: number): string => (`${item.name}${index}`);

  return (
    <View flex>
      <FlatList
        style={{ paddingHorizontal: 15, paddingVertical: 8 }}
        data={childCategories}
        renderItem={({ item, index }) => renderItem(item, index)}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};
