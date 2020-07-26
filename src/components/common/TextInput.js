/**
 * @flow
 * Created by Dima Portenko on 01.07.2020
 */
import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';
import { View } from 'react-native-ui-lib';

import type { Props } from 'react-native/Libraries/Components/TextInput/TextInput'
import { colors } from '../../theme/colors';

type TextInputProps = {|
  ...Props,
|}

export const TextInput = (props: TextInputProps) => {

  return (
    <View style={styles.containerStyle}>
      <RNTextInput {...props} style={[styles.input]} />
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
