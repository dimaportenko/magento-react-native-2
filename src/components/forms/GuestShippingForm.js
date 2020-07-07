/**
 * @flow
 * Created by Dima Portenko on 01.07.2020
 */
import React, { useState, useEffect } from 'react';
import { View, Button, Colors } from 'react-native-ui-lib';
import { Formik } from 'formik';
import { TextInput } from '../common/TextInput';
import { useCountry } from '../../logic/country/useCountry';
import CountryPicker from 'react-native-country-picker-modal';

export const GuestShippingForm = () => {
  const { loading, countries, countryCodes } = useCountry();
  const [countryPickerVisible, setCountryPickerVisible] = useState(false);

  // useEffect(() => {
    // setCountryCodes(countries.map(item => item.value));
  // }, [countries]);

  return (
    <Formik
      initialValues={{
        email: '',
        firstname: '',
        lastname: '',
        country: '',
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
            value={values.firstname}
          />
          <View paddingT-10 />
          <TextInput
            placeholder="Last Name"
            onChangeText={handleChange('lastname')}
            onBlur={handleBlur('lastname')}
            value={values.lastname}
          />
          <View paddingT-10 />
          <CountryPicker
            withCountryNameButton
            countryCode={values.country}
            countryCodes={countryCodes}
            onClose={() => setCountryPickerVisible(false)}
            visible={countryPickerVisible}
            // $FlowFixMeState
            onSelect={(country) => handleChange('country')(country.cca2)}
            withFilter
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
