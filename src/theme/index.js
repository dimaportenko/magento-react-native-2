/** @flow */
import { Typography, Colors, Spacings, BorderRadiuses } from 'react-native-ui-lib';
import { colors } from './colors';

export const themeInit = () => {
  Colors.loadColors(colors);

  const defaultFont = {
    fontSize: 14,
    fontWeight: '300',
  };

  Typography.loadTypographies({
    defaultF: defaultFont,
    categoryItemTitle: { ...defaultFont, fontSize: 28 },
    productItemTitle: { ...defaultFont, fontSize: 12 },
    productDetailsTitle: { ...defaultFont, fontSize: 18 },

    optionTitle: { fontWeight: '300', fontSize: 18 },
    optionValue: { fontWeight: '300', fontSize: 18 },
  });

  Spacings.loadSpacings({
    page: 15,
    controlSize: 16,
  });

  BorderRadiuses.loadBorders({
    br17: 17,
  });
};
