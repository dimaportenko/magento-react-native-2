/**
 * @flow
 * Created by Dima Portenko on 12.05.2020
 */
import React, { useMemo } from 'react';
import { View, Text } from 'react-native-ui-lib';

import { useOption } from '../../logic/product/useOption';
import getOptionType from '../../logic/utils/product/getOptionType';
import { TileList } from './TileList';
import { SwatchList } from './SwatchList';

import type { ConfigurableProductOptionsValues } from '../../logic/types/magento';

type Props = {
  attribute_code: string,
  attribute_id: string,
  label: string,
  onSelectionChange: (optionId: string, selection: ?number) => void,
  selectedValue: ?string,
  values: Array<ConfigurableProductOptionsValues>,
}

// TODO: get an explicit field from the API
// that identifies an attribute as a swatch
const getListComponent = (attribute_code, values) => {
  const optionType = getOptionType({ attribute_code, values });

  return optionType === 'swatch' ? SwatchList : TileList;
};

export const Option = (props: Props) => {
  const {
    attribute_code,
    attribute_id,
    label,
    onSelectionChange,
    selectedValue,
    values,
  } = props;

  const {
    handleSelectionChange,
    initialSelection,
    selectedValueLabel,
    selectedValueDescription,
  } = useOption({
    attribute_id,
    label,
    onSelectionChange,
    selectedValue,
    values,
  });

  const ValueList = useMemo(
    () => getListComponent(attribute_code, values),
    [attribute_code, values]);

  return (
    <View>
      <Text optionTitle>{label}</Text>
      <ValueList
        selectedValue={initialSelection}
        items={values}
        onSelectionChange={handleSelectionChange}
      />
      <Text optionDescription>{`${selectedValueLabel}: ${selectedValueDescription}`}</Text>
    </View>
  );
};
