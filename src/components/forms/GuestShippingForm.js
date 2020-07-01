/**
 * @flow
 * Created by Dima Portenko on 01.07.2020
 */
import React from 'react';
import { View, Button, Colors } from 'react-native-ui-lib';
import { Formik } from 'formik';
import { TextInput } from '../common/TextInput';

export const GuestShippingForm = () => {

  return (
    <Formik
      initialValues={{
        email: '',
        firstname: '',
        lastname: '',
      }}
      onSubmit={values => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput
            placeholder="Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          <View paddingT-10 />
          <TextInput
            placeholder="First Name"
            onChangeText={handleChange('firstname')}
            onBlur={handleBlur('firstname')}
            value={values.email}
          />
          <View paddingT-10 />
          <TextInput
            placeholder="Last Name"
            onChangeText={handleChange('lastname')}
            onBlur={handleBlur('lastname')}
            value={values.email}
          />
          <View paddingT-10 />
          <Button
            label="Submit"
            backgroundColor={Colors.primary}
            fullWidth
            onPress={handleSubmit}
          />
        </View>
      )}
    </Formik>
  );
};
