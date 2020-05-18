/** @flow */
import { Typography, Colors, Spacings, BorderRadiuses } from 'react-native-ui-lib';

export const themeInit = () => {
  Colors.loadColors({
    pink: '#FF69B4',
    gold: '#FFD700',
    control: Colors.rgba(Colors.black, 0.6),
    controlTint: Colors.white,
  });

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
