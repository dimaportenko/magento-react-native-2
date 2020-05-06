/** @flow */
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { View, Text, Spacings } from 'react-native-ui-lib';
import { magentoConfig } from '../../../magento.config';
import { useRoute } from '@react-navigation/native';
import { useCategory } from '../../logic/category/useCategory';
import { GET_CATEGORY } from '../../queries/getCategory';
import type { Product } from '../../logic/types/magento';
import { ProductItem } from '../../components/category/ProductItem';


export const CategoryScreen = () => {
  const route = useRoute();
  const [products: Product[], setProducts] = useState([]);
  const [categoryId] = useState(route?.params?.categoryId || magentoConfig.rootCategoryId);
  const { data, loading, error } = useCategory({
    query: GET_CATEGORY,
    categoryId,
  });
  
  useEffect(() => {
    if (data) {
      setProducts(data.products.items || []);
    }
    console.log(data, loading, error);
  }, [data, loading, error]);

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

  const renderItem = (item: Product, index: number): React$Node => {
    return (
      <ProductItem product={item} />
    );
  };

  const keyExtractor = (item: Product, index) => item.small_image.url;

  return (
    <View flex>
      <FlatList
        numColumns={2}
        style={styles.list}
        data={products}
        renderItem={({ item, index }) => renderItem(item, index)}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    // paddingHorizontal: Spacings.s4,
    paddingVertical: Spacings.s2,
    // justifyContent: 'space-between',
  // alignItems: 'stretch',
  },
});