/**
 * @flow
 * Created by Dima Portenko on 01.07.2020
 */
import React from 'react';
import { View, Text } from 'react-native-ui-lib';
import { GuestAddressForm } from '../../components/forms/GuestAddressForm';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

export const CheckoutScreen = () => {

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <View flex padding-10>
        <Text>Guest Checkout</Text>
        <View paddingT-10 />
        <GuestAddressForm />
      </View>
    </TouchableWithoutFeedback>
  );
};
