/**
 * @flow
 * Created by Dima Portenko on 07.05.2020
 */
import React, { useMemo, useState, useCallback } from 'react';
import { findMatchingVariant } from '../utils/findMatchingProductVariant';

import type { MediaGalleryEntry, PriceAmountType, Product, ProductDescription } from '../types/magento';
import { isProductConfigurable } from '../utils/isProductConfigurable';

type Props = {
  product: Product
};

export type ProductDetailsData = {
  productDetails: ProductDetails,
  mediaGalleryEntries: Array<MediaGalleryEntry>,
  handleSelectionChange: (optionId: string, selection: ?number) => void,
  quantity: number,
  handleSetQuantity: (value: number) => void,
}

export type ProductDetails = {
  description: ProductDescription,
  name: string,
  price: PriceAmountType,
  sku: string,
};

const INITIAL_OPTION_CODES = new Map();
const INITIAL_OPTION_SELECTIONS = new Map<string, ?number>();
const INITIAL_QUANTITY = 1;

const SUPPORTED_PRODUCT_TYPES = ['SimpleProduct', 'ConfigurableProduct'];


const deriveOptionCodesFromProduct = product => {
  // If this is a simple product it has no option codes.
  if (!isProductConfigurable(product)) {
    return INITIAL_OPTION_CODES;
  }

  // Initialize optionCodes based on the options of the product.
  const initialOptionCodes = new Map();
  for (const {
    attribute_id,
    attribute_code
  } of product.configurable_options) {
    initialOptionCodes.set(attribute_id, attribute_code);
  }

  return initialOptionCodes;
};

// Similar to deriving the initial codes for each option.
const deriveOptionSelectionsFromProduct = (product: Product): Map<string, ?number> => {
  if (!isProductConfigurable(product)) {
    return INITIAL_OPTION_SELECTIONS;
  }

  const initialOptionSelections = new Map<string, ?number>();
  for (const { attribute_id } of product.configurable_options) {
    initialOptionSelections.set(attribute_id, undefined);
  }

  return initialOptionSelections;
};

const getMediaGalleryEntries = (product: Product, optionCodes, optionSelections): Array<MediaGalleryEntry>  => {
  let value = [];
  const { media_gallery_entries } = product;

  // Selections are initialized to "code => undefined". Once we select a value, like color, the selections change. This filters out unselected options.
  const optionsSelected =
    Array.from(optionSelections.values()).filter(value => !!value).length >
    0;

  if (!isProductConfigurable(product) || !optionsSelected) {
    value = media_gallery_entries;
  } else {
    // If any of the possible variants matches the selection add that
    // variant's image to the media gallery. NOTE: This _can_, and does,
    // include variants such as size. If Magento is configured to display
    // an image for a size attribute, it will render that image.
    const { variants } = product;

    const item = findMatchingVariant({
      optionCodes,
      optionSelections,
      variants,
    });

    value = item
      ? [...item.product.media_gallery_entries, ...media_gallery_entries]
      : media_gallery_entries;
  }

  return value;
};

const getIsMissingOptions = (product, optionSelections) => {
  // Non-configurable products can't be missing options.
  if (!isProductConfigurable(product)) {
    return false;
  }

  // Configurable products are missing options if we have fewer
  // option selections than the product has options.
  const { configurable_options } = product;
  const numProductOptions = configurable_options.length;
  const numProductSelections = Array.from(optionSelections.values()).filter(
    value => !!value
  ).length;

  return numProductSelections < numProductOptions;
};

const getConfigPrice = (product, optionCodes, optionSelections) => {
  let value;

  const optionsSelected =
    Array.from(optionSelections.values()).filter(value => !!value).length >
    0;

  if (!isProductConfigurable(product) || !optionsSelected) {
    value = product.price.regularPrice.amount;
  } else {
    const { variants } = product;
    const item = findMatchingVariant({
      optionCodes,
      optionSelections,
      variants,
    });

    value = item
      ? item.product.price.regularPrice.amount
      : product.price.regularPrice.amount;
  }

  return value;
};

export const useProductDetails = (props: Props): ProductDetailsData => {
  const [quantity, setQuantity] = useState(INITIAL_QUANTITY);
  const { product } = props;

  const productType = product.__typename;

  const isSupportedProductType = SUPPORTED_PRODUCT_TYPES.includes(
    productType
  );

  const derivedOptionSelections = useMemo(
    () => deriveOptionSelectionsFromProduct(product),
    [product]
  );

  const [optionSelections, setOptionSelections] = useState(
    derivedOptionSelections
  );

  const derivedOptionCodes = useMemo(
    () => deriveOptionCodesFromProduct(product),
    [product]
  );
  const [optionCodes] = useState(derivedOptionCodes);

  const isMissingOptions = useMemo(
    () => getIsMissingOptions(product, optionSelections),
    [product, optionSelections]
  );
  const mediaGalleryEntries = useMemo(
    () => getMediaGalleryEntries(product, optionCodes, optionSelections),
    [product, optionCodes, optionSelections]
  );

  const productPrice = useMemo(
    () => getConfigPrice(product, optionCodes, optionSelections),
    [product, optionCodes, optionSelections]
  );

  const handleSelectionChange = useCallback(
    (optionId: string, selection: ?number) => {
      // We must create a new Map here so that React knows that the value
      // of optionSelections has changed.

      const nextOptionSelections = new Map([...optionSelections]);
      nextOptionSelections.set(optionId, selection);
      setOptionSelections(nextOptionSelections);
    },
    [optionSelections]
  );

  const handleSetQuantity = useCallback(
    value => {
      setQuantity(value);
    },
    [setQuantity]
  );

  const productDetails = {
    description: product.description,
    name: product.name,
    price: productPrice,
    sku: product.sku,
  };

  return {
    // breadcrumbCategoryId,
    // handleAddToCart,
    handleSelectionChange,
    handleSetQuantity,
    // isAddToCartDisabled:
    //   !isSupportedProductType || isAddingItem || isMissingOptions,
    mediaGalleryEntries,
    productDetails,
    quantity,
  };
};


