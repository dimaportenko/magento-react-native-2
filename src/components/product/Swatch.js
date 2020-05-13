/**
 * @flow
 * Created by Dima Portenko on 12.05.2020
 */
import React, { useCallback, useMemo, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Colors, Text } from 'react-native-ui-lib';

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
  const color = {};

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
    const { thumbnail, value, __typename } = swatch_data;
    if (__typename === 'ColorSwatchData') {
      backgroundColor.backgroundColor = value;
    } else if (__typename === 'TextSwatchData') {
      backgroundColor.backgroundColor = isSelected ? Colors.black : Colors.white;
      color.color = isSelected ? Colors.white : Colors.black;
    } else if (__typename === 'ImageSwatchData') {
      // TODO: add image swatch
      // backgroundColor.backgroundColor = value;
    }
  }


  const renderContent = () => {
    switch (swatch_data?.__typename) {
      case 'ColorSwatchData': {
        return icon;
      }
      case 'TextSwatchData': {
        return <Text style={color}>{swatch_data?.value}</Text>;
      }
      // TODO: add image swatch
      case 'ImageSwatchData': {
        return <View />
      }
    }
  };

  return (
    <View paddingV-5 paddingR-7>
      <TouchableOpacity
        style={[styles.container, backgroundColor]}
        onPress={handleClick}
      >
        <View flex center>
          {renderContent()}
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
  },
});
