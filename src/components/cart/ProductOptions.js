/**
 * @flow
 * Created by Dima Portenko on 27.06.2020
 */
import React, { useMemo, Fragment } from 'react';
import { View, Text } from 'react-native-ui-lib';

type ProductOptionsProps = {
  options: Array<{
    id: string,
    option_label: string,
    value_id: string,
    value_label: string,
  }>,
}

export const ProductOptions = ({ options }: ProductOptionsProps) => {

  const displayOptions = useMemo(
    () =>
      options.map(({ option_label, value_label }) => {
        const key = `${option_label}${value_label}`;

        return (
          <Fragment key={key}>
            <Text>
              {option_label} : {value_label}
            </Text>
          </Fragment>
        );
      }),
    [options]
  );

  return (
    <>
      {displayOptions}
    </>
  );
};
