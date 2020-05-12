/**
 * @flow
 * Created by Dima Portenko on 12.05.2020
 */
import React from 'react';

import type { ConfigurableProductOptions } from '../../logic/types/magento';
import { useOptions } from '../../logic/product/useOptions';
import { Option } from './Option';

type SelectedValue = {
  option_label: string,
  value_label: string,
}

type Props = {
  options: Array<ConfigurableProductOptions>,
  onSelectionChange: (string, ?string) => void,
  selectedValues?: Array<SelectedValue>,
}

export const Options = (props: Props) => {
  const { onSelectionChange, options, selectedValues = [] } = props;

  const { handleSelectionChange, selectedValueMap } = useOptions({
    onSelectionChange,
    selectedValues,
  });

  return (
    <>
      {options.map((option: ConfigurableProductOptions) => (
        <Option
          {...option}
          key={option.attribute_id}
          onSelectionChange={handleSelectionChange}
          selectedValue={selectedValueMap.get(option.label)}
        />
      ))}
    </>
  );
};
