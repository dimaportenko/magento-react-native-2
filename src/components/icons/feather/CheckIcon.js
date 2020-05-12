/**
 * @flow
 * Created by Dima Portenko on 12.05.2020
 */
import React from 'react';
import {
  Svg,
  Polyline,
} from 'react-native-svg';

type Props = {
  color: string,
  size: string | number,
}

export const CheckIcon = (props: Props) => {
  const { color, size } = props;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Polyline
        points="20 6 9 17 4 12"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

CheckIcon.defaultProps = {
  color: 'black',
  size: '24',
};
