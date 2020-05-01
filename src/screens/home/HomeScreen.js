import React from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { Center, Row, Spacer } from 'react-native-markup-kit';
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
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center>
        <Text>{error.message}</Text>
      </Center>
    );
  }

  return (
    <Row>
      {childCategories?.map(category => (
        <Row>
          <Spacer size={30}/>
          <CategoryTile  category={category} />
        </Row>
      ))}
    </Row>
  );
};
