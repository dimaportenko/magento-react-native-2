/**
 * @flow
 * Created by Dima Portenko on 17.05.2020
 */
import React from 'react';
import { View, Text } from 'react-native-ui-lib';
import { StepperButton } from './StepperButton';

type Props = {
  value: number,
  onValueChange: (value: number) => void,
}

export const Stepper = ({ value, onValueChange }: Props) => {

  const add = () => {onValueChange(++value)}
  const minus = () => {onValueChange(--value)}

  return (
    <View row centerV>
      <StepperButton onPress={minus} type="minus" />
      <View paddingH-10>
        <Text optionTitle>{value}</Text>
      </View>
      <StepperButton onPress={add} type="plus" />
    </View>
  );
};
