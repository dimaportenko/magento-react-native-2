/**
 * @flow
 * Created by Dima Portenko on 12.05.2020
 */
import React, { useCallback, useMemo, useState } from 'react';

import type { ConfigurableProductOptionsValues } from '../types/magento';

type Props = {
  attribute_id: string,
  label: string,
  onSelectionChange: (optionId: string, selection: ?string) => void,
  selectedValue: string,
  values: Array<ConfigurableProductOptionsValues>,
}

type Result = {
  handleSelectionChange: (selection: string) => void,
  initialSelection: ConfigurableProductOptionsValues,
  selectedValueLabel: string,
  selectedValueDescription: string,
}

export const useOption = (props: Props): Result => {
  const {
    attribute_id,
    label,
    onSelectionChange,
    selectedValue,
    values
  } = props;

  const [selection, setSelection] = useState(null);

  const initialSelection = useMemo(() => {
    let initialSelection = {};
    const searchValue = selection || selectedValue;
    if (searchValue) {
      initialSelection =
        values.find(value => value.default_label === searchValue) || {};
    }
    return initialSelection;
  }, [selectedValue, selection, values]);


  const valuesMap = useMemo(() => {
    return new Map(
      values.map(value => [value.value_index, value.store_label])
    );
  }, [values]);

  const selectedValueLabel = `Selected ${label}:`;
  const selectedValueDescription =
    selection || initialSelection.default_label || 'None';

  const handleSelectionChange = useCallback(
    selection => {
      setSelection(valuesMap.get(selection));

      if (onSelectionChange) {
        onSelectionChange(attribute_id, selection);
      }
    },
    [attribute_id, onSelectionChange, valuesMap]
  );

  return {
    handleSelectionChange,
    initialSelection,
    selectedValueLabel,
    selectedValueDescription,
  };
};
