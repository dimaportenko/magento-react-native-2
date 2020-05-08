/** @flow */
import type { Product } from '../types/magento';

export const isProductConfigurable = (product: Product): boolean %checks =>
  product.__typename === 'ConfigurableProduct';
