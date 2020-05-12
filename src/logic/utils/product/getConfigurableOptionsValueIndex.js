/**
 * @flow
 * Created by Dima Portenko on 12.05.2020
 */

import type { ConfigurableProductOptionsValues } from '../../types/magento';

export const getConfigurableOptionsValueIndex = (item: $Shape<ConfigurableProductOptionsValues>): number => item.value_index;