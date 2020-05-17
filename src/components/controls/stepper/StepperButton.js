/**
 * @flow
 * Created by Dima Portenko on 09.05.2020
 */
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Colors } from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/AntDesign';

type ButtonType = 'plus' | 'minus';

type Props = {
  onPress: () => void,
  type: ButtonType,
}

export const StepperButton = ({ type, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View flex center bg-control br60>
        <Icon name={type}color={Colors.controlTint} size={16} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 34,
    height: 34,
  },
});
