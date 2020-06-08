/**
 * @flow
 * Created by Dima Portenko on 07.05.2020
 */
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Platform } from 'react-native';
import { View, Colors, Constants, Text, Button, Spacings } from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/Ionicons';
import HTML from 'react-native-render-html';

import type { Product } from '../../logic/types/magento';

import { useProductDetails } from '../../logic/product/useProductDetails';
import { MediaGallery } from '../../components/media/MediaGallery';
import { BackButton } from '../../components/controls/BackButton';
import { Price } from '../../components/price/Price';
import { isProductConfigurable } from '../../logic/utils/isProductConfigurable';
import { Options } from '../../components/product/Options';
import { clearHtmlText } from '../../logic/utils/clearHtmlText';
import { Stepper } from '../../components/controls/stepper/Stepper';

type Props = {
  product: Product,
}

export const ProductDetails = ({ product }: Props) => {
  const {
    mediaGalleryEntries,
    productDetails,
    handleSelectionChange,
    handleSetQuantity,
    quantity,
  } = useProductDetails({ product });

  const options = isProductConfigurable(product) ? (
    <Options
      onSelectionChange={handleSelectionChange}
      options={product.configurable_options}
    />
  ) : null;

  return (
    <View>
      <ScrollView style={styles.container}>
        <View flex paddingB-70>
          <MediaGallery entries={mediaGalleryEntries} />
          <View row padding-page spread>
            <Text productDetailsTitle>{clearHtmlText(product.name)}</Text>
            <Price
              currency={productDetails.price.currency}
              value={productDetails.price.value}
              textProps={{
                productDetailsTitle: true,
              }}
            />
          </View>
          <View paddingH-page >
            {options}
            <View paddingV-10>
              <Stepper value={quantity} onValueChange={handleSetQuantity} />
            </View>
          </View>
          <View paddingH-page>
            <HTML html={product.description.html} imagesMaxWidth={Constants.screenWidth} />
          </View>
          <BackButton />
        </View>
      </ScrollView>
      <View absH style={{ bottom: 0 }}>
        <Button
          absB
          label="Add to Cart"
          backgroundColor={Colors.primary}
          fullWidth
          size="large"
          iconOnRight
          iconSource={() => (
            <View margin-10>
              <Icon name="md-cart" color={Colors.secondary} size={Spacings.controlSize} />
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingTop: Platform.select({
      ios: Constants.statusBarHeight,
      android: 0,
    }),
  },
});
