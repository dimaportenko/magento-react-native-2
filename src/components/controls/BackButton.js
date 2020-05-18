/**
 * @flow
 * Created by Dima Portenko on 09.05.2020
 */
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Colors, Spacings } from 'react-native-ui-lib';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

export const BackButton = () => {
  const navigation = useNavigation()

  const onPress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View flex center>
        <Icon name="left" color={Colors.controlTint} size={Spacings.controlSize} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: Colors.rgba(Colors.black, 0.6),
    position: 'absolute',
    top: 12,
    left: 12,
    width: 34,
    height: 34,
  },
});
