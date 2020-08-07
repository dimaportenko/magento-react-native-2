/**
 * @flow
 * Created by Dima Portenko on 01.07.2020
 */
import React, { useState, useEffect } from 'react';
import { View, Button, Colors, Text } from 'react-native-ui-lib';
import { Formik } from 'formik';
import * as yup from 'yup';
import { TextInput } from '../common/TextInput';
import { useCountry } from '../../logic/country/useCountry';
import type { CountryQueryType, RegionDataType } from '../../logic/country/useCountry';
import { RegionInput } from './RegionInput';
import { Select } from '../modals/Select';
import { useGuestAddressForm } from '../../logic/checkout/useGuestAddressForm';

const validationSchema = yup.object({
  email: yup.string().email('Invalid email').required(),
  firstname: yup.string().required('Required'),
  lastname: yup.string().required('Required'),
  country: yup.string().required('Required'),
  street: yup.string().required('Required'),
  street2: '',
  city: yup.string().required('Required'),
  postcode: yup.string().required(),
  telephone: yup.number().min(6, '6 digits minimum').required(),
  region: yup.mixed().test('region-test', 'region is required', (value) => {
    if (typeof value === 'string' || value instanceof String) {
      return value.length > 0;
    }
    const { id, name, code } = value;
    return id?.length > 0 && name?.length > 0 && code?.length > 0;
  }),
});

export const GuestAddressForm = () => {
  const { loading, countries, countryCodes, countriesData } = useCountry();
  const [selectedCountryCode: ?string, setSelectedCountryCode] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState<?CountryQueryType>(null);

  const afterSubmit = () => {console.log('afterSubmit')}

  const { handleSubmit: handleSubmitRequest } = useGuestAddressForm({
    afterSubmit
  });

  useEffect(() => {
    if (selectedCountryCode) {
      const selectedData = countriesData.find(country => country.two_letter_abbreviation === selectedCountryCode);
      if (selectedData) {
        setSelectedCountry(selectedData);
      }
    }
    // console.warn(countriesData)
  }, [selectedCountryCode, countriesData]);

  const onSubmit = (values) => {
    console.log(values);
    handleSubmitRequest(values);
  }

  return (
    <Formik
      validationSchema={validationSchema}
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
        region: {
          id: '',
          name: '',
          code: '',
        },
      }}
      onSubmit={onSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View>
          <TextInput
            placeholder="Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            error={errors.email}
          />
          <View paddingT-10 />
          <TextInput
            placeholder="First Name"
            onChangeText={handleChange('firstname')}
            onBlur={handleBlur('firstname')}
            value={values.firstname}
            error={errors.firstname}
          />
          <View paddingT-10 />
          <TextInput
            placeholder="Last Name"
            onChangeText={handleChange('lastname')}
            onBlur={handleBlur('lastname')}
            value={values.lastname}
            error={errors.lastname}
          />
          <View paddingT-10 />
          <Select
            title="Select Country"
            data={countriesData}
            labelKey="full_name_english"
            selectedLabel={selectedCountry?.full_name_english}
            onSelect={(country) => {
              // $FlowFixMeState*/
              handleChange('country')(country.id);
              setSelectedCountryCode(country.id);
            }}
          />
          <View paddingT-10 />
          <TextInput
            placeholder="Street Address"
            onChangeText={handleChange('street')}
            onBlur={handleBlur('street')}
            value={values.street}
            error={errors.street}
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
            error={errors.city}
          />
          <View paddingT-10 />
          <RegionInput
            regionData={selectedCountry?.available_regions}
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
            error={errors.postcode}
          />
          <View paddingT-10 />
          <TextInput
            placeholder="Phone Number"
            onChangeText={handleChange('telephone')}
            onBlur={handleBlur('telephone')}
            value={values.telephone}
            error={errors.telephone}
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
