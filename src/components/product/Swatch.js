/**
 * @flow
 * Created by Dima Portenko on 12.05.2020
 */
import React, { useCallback, useMemo, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Colors } from 'react-native-ui-lib';

import type { ConfigurableProductOptionsValues } from '../../logic/types/magento';
import { CheckIcon } from '../icons/feather/CheckIcon';

type Props = {
  item: ConfigurableProductOptionsValues,
  isSelected: boolean,
  onClick(selection: number): void,
}

const SWATCH_WIDTH = 48;

export const Swatch = (props: Props) => {
  const backgroundColor = {};

  const {
    isSelected,
    item: { label, value_index, swatch_data },
    onClick,
  } = props;

  const handleClick = useCallback(() => {
    onClick(value_index);
  }, [value_index, onClick]);

  const icon = useMemo(() => {
    return isSelected ? <CheckIcon /> : null;
  }, [isSelected]);

  if (swatch_data) {
    const { thumbnail, value } = swatch_data;
    if (thumbnail) {

    } else {
      backgroundColor.backgroundColor = value;
    }
  }

  return (
    <View paddingV-5 paddingR-7>
      <TouchableOpacity
        style={[styles.container, backgroundColor]}
        onPress={handleClick}
      >
        <View flex center>
          {icon}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SWATCH_WIDTH,
    height: SWATCH_WIDTH,
    borderColor: Colors.black,
    borderWidth: 1,
  }
});
