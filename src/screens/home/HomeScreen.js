import React from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import { useCategoryList } from '../../logic/category/useCategoryList';
import { magentoConfig } from '../../../magento.config';
import { GET_CATEGORY_LIST } from '../../queries/getCategoryList';
import CategoryTile from '../../components/category/CategoryTile';


export default () => {
  const { childCategories, error, loading } = useCategoryList({
    query: GET_CATEGORY_LIST,
    id: magentoConfig.rootCategoryId,
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

  return (
    <View flex marginH-10>
      <ScrollView showsVerticalScrollIndicator={false}>
        {childCategories?.map((category, index) => (
          <View key={`${category.name}${index}`} marginV-7>
            <CategoryTile category={category} right={!!(index % 2)} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
