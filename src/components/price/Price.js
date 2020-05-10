/**
 * @flow
 * Created by Dima Portenko on 10.05.2020
 */
import React from 'react';
import { Text } from 'react-native-ui-lib';
import { getCurrencySymbols } from '../../logic/utils/getCurrencySymbols';

type Props = {
  currency: string,
  value: string,
  textProps?: {
    [string]: boolean
  }
};

export const Price = ({ currency, value, textProps = {} }: Props) => (
  <Text {...textProps}>
    {`${getCurrencySymbols[currency] || currency} ${value}`}
  </Text>
);
