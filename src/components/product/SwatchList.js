/**
 * @flow
 * Created by Dima Portenko on 12.05.2020
 */
import React, { useMemo } from 'react';
import { View } from 'react-native-ui-lib';

import { Swatch } from './Swatch';

import type { ConfigurableProductOptionsValues } from '../../logic/types/magento';
import { getConfigurableOptionsValueIndex } from '../../logic/utils/product/getConfigurableOptionsValueIndex';

type Props = {
  selectedValue: ConfigurableProductOptionsValues,
  items: Array<ConfigurableProductOptionsValues>,
  onSelectionChange: (selection: number) => void,
}

export const SwatchList = (props: Props) => {

  const { selectedValue = {}, items, onSelectionChange } = props;

  const swatches = useMemo(
    () =>
      items.map(item => {
        const isSelected = item.label === selectedValue.label;

        return (
          <Swatch
            key={getConfigurableOptionsValueIndex(item)}
            isSelected={isSelected}
            item={item}
            onClick={onSelectionChange}
          />
        );
      }),
    [selectedValue.label, items, onSelectionChange]
  );

  return <View row>{swatches}</View>;
};
