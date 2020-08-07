/**
 * @flow
 * Created by Dima Portenko on 01.07.2020
 */
import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';
import { Text, View, Colors } from 'react-native-ui-lib';

import type { Props } from 'react-native/Libraries/Components/TextInput/TextInput'
import { colors } from '../../theme/colors';

type TextInputProps = {|
  ...Props,
  error?: string,
|}

export const TextInput = (props: TextInputProps) => {
  const inputProps: Props = props;
  return (
    <View>
      <View style={[styles.containerStyle, { borderColor: props.error ? Colors.error : Colors.primary }]}>
        <RNTextInput {...inputProps} style={[styles.input]} />
      </View>
      {props.error && <Text marginT-5 marginL-5 error>{props.error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: 40,
    borderColor: colors.black,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    padding: 8,
  },
});
