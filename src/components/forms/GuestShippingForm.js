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
import type { RegionDataType } from '../../logic/country/useCountry';
import { RegionInput } from './RegionInput';
import { Select } from '../modals/Select';

export const GuestShippingForm = () => {
  const { loading, countries, countryCodes, countriesData } = useCountry();
  const [countryPickerVisible, setCountryPickerVisible] = useState(false);
  const [selectedCountryCode: ?string, setSelectedCountryCode] = useState(null);
  const [regionData: ?RegionDataType, setRegionData] = useState(null);

  useEffect(() => {
    if (selectedCountryCode) {
      const selectedData = countriesData.find(country => country.two_letter_abbreviation === selectedCountryCode);
      if (selectedData) {
        setRegionData(selectedData.available_regions);
      }
    }
  }, [selectedCountryCode, countriesData]);

  return (
    <Formik
      initialValues={{
        email: '',
        firstname: '',
        lastname: '',
        country: '',
        street: '',
        street2: '',
        city: '',
        postcode: '',
        telephone: '',
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
            onSelect={(country) => {
              // $FlowFixMeState
              handleChange('country')(country.cca2);
              setSelectedCountryCode(country.cca2);
            }}
            withFilter
          />
          <View paddingT-10 />
          <Select
            title="Select Country"
          />
          <View paddingT-10 />
          <TextInput
            placeholder="Street Address"
            onChangeText={handleChange('street')}
            onBlur={handleBlur('street')}
            value={values.street}
          />
          <View paddingT-10 />
          <TextInput
            placeholder="Street Address 2"
            onChangeText={handleChange('street2')}
            onBlur={handleBlur('street2')}
            value={values.street2}
          />
          <View paddingT-10 />
          <TextInput
            placeholder="City"
            onChangeText={handleChange('city')}
            onBlur={handleBlur('city')}
            value={values.city}
          />
          <View paddingT-10 />
          <RegionInput
            regionData={regionData}
            value={values.region}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <View paddingT-10 />
          <TextInput
            placeholder="ZIP / Postal Code"
            onChangeText={handleChange('postcode')}
            onBlur={handleBlur('postcode')}
            value={values.postcode}
          />
          <View paddingT-10 />
          <TextInput
            placeholder="Phone Number"
            onChangeText={handleChange('telephone')}
            onBlur={handleBlur('telephone')}
            value={values.telephone}
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
