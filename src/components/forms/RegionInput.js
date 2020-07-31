/**
 * @flow
 * Created by Dima Portenko on 08.07.2020
 */
import React, { useState } from 'react';
import { View } from 'react-native-ui-lib';
import type { RegionDataType } from '../../logic/country/useCountry';
import { TextInput } from '../common/TextInput';
import { Select } from '../modals/Select';

type Props = {|
  regionData: ?Array<RegionDataType>,
  handleChange(path: string): void,
  handleBlur(path: string): void,
  value: {
    id: string,
    name: string,
    code: string,
  } | string,
|}

export const RegionInput = (props: Props) => {
  const { regionData, handleBlur, handleChange, value } = props;
  const [selectedRegion, setSelectedRegion] = useState<?RegionDataType>(null);

  if (regionData) {
    return (
      <View>
        <Select
          title="Select Region"
          data={regionData}
          labelKey="name"
          selectedLabel={selectedRegion?.name}
          onSelect={(region) => {
            // $FlowFixMeState*/
            handleChange('region')({
              target: {
                value: region,
              },
            });
            setSelectedRegion(region);
          }}
        />
      </View>
    );
  }

  return (
    <TextInput
      placeholder="State"
      onChangeText={handleChange('region')}
      onBlur={handleBlur('region')}
      value={typeof value === 'string' ? value : value.name}
    />
  );
};
