/**
 * @flow
 * Created by Dima Portenko on 05.08.2020
 */
import React, { useCallback } from 'react';
import { useMutation } from '@apollo/client';
import { useSelector } from 'react-redux';
import type { StateRedux } from '../../redux/reducers';
import { SET_GUEST_SHIPPING_MUTATION } from '../../queries/shipping/setGuestShippingMutation';

type FormValuesType = {
  email: string,
  firstname: string,
  lastname: string,
  country: string,
  street: string,
  street2: string,
  city: string,
  postcode: string,
  telephone: string,
  region: {
    id: string,
    name: string,
    code: string,
  },
}

type Props = {|
  afterSubmit?: () => void
|};

type Result = {|
  handleSubmit(formValues: FormValuesType): Promise<void>,
|};

export const useGuestAddressForm = ({ afterSubmit }: Props): Result => {
  const cartId = useSelector((state: StateRedux): ?string => state.cart.cartId);

  const [setGuestShipping, { error, loading }] = useMutation(
    SET_GUEST_SHIPPING_MUTATION
  );

  const handleSubmit = useCallback(
    async formValues => {
      const { country, email, ...address } = formValues;
      try {
        await setGuestShipping({
          variables: {
            cartId,
            email,
            address: {
              ...address,
              country_code: country
            }
          }
        });
      } catch {
        return;
      }

      if (afterSubmit) {
        afterSubmit();
      }
    },
    [afterSubmit, cartId, setGuestShipping]
  );

  return {
    handleSubmit,
  };
};
