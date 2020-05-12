/**
 * @flow
 * Created by Dima Portenko on 12.05.2020
 */
import React, { useCallback } from 'react';

type SelectedValue = {
  option_label: string,
  value_label: string,
}

type Props = {
  onSelectionChange: (string, ?number) => void,
  selectedValues: Array<SelectedValue>
}

type Result = {
  handleSelectionChange: (optionId: string, selection: ?number) => void,
  selectedValueMap: Map<string, string>,
}

export const useOptions = (props: Props): Result => {
  const { onSelectionChange, selectedValues } = props;
  const handleSelectionChange = useCallback(
    (optionId: string, selection: ?number) => {
      if (onSelectionChange) {
        onSelectionChange(optionId, selection);
      }
    },
    [onSelectionChange]
  );

  const selectedValueMap = new Map<string, string>();
  for (const { option_label, value_label } of selectedValues) {
    selectedValueMap.set(option_label, value_label);
  }

  return {
    handleSelectionChange,
    selectedValueMap,
  };
};
