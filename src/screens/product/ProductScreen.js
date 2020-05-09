/**
 * @flow
 * Created by Dima Portenko on 07.05.2020
 */
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { View, Colors, Constants } from 'react-native-ui-lib';
import { useRoute } from '@react-navigation/native';

import type { Product } from '../../logic/types/magento';
import { useProductDetails } from '../../logic/product/useProductDetails';
import { MediaGallery } from '../../components/media/MediaGallery';
import { BackButton } from '../../components/navigation/BackButton';


export const ProductScreen = () => {
  const route = useRoute();
  const [product: Product] = useState(route.params.product);
  const { mediaGalleryEntries, productDetails } = useProductDetails({ product });

  return (
    <ScrollView style={styles.container}>
      <View flex>
        <MediaGallery entries={mediaGalleryEntries} />
        <BackButton />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingTop: Constants.statusBarHeight,
  },
});
