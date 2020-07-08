/**
 * @flow
 * Created by Dima Portenko on 08.07.2020
 */
import React from 'react';
import { View, Text } from 'react-native-ui-lib';
import type { RegionDataType } from '../../logic/country/useCountry';
import { TextInput } from '../common/TextInput';

type Props = {|
  regionData: ?RegionDataType,
  handleChange(path: string): void,
  handleBlur(path: string): void,
  value: string,
|}

export const RegionInput = (props: Props) => {
  const { regionData, handleBlur, handleChange, value } = props;

  if (regionData) {
    return (
      <View>
        <Text>Region Picker</Text>
      </View>
    );
  }

  return (
    <TextInput
      placeholder="State"
      onChangeText={handleChange('postcode')}
      onBlur={handleBlur('postcode')}
      value={value}
    />
  );
};
