/** @flow */
import { Typography, Colors, Spacings } from 'react-native-ui-lib';

export const themeInit = () => {
  Colors.loadColors({
    pink: '#FF69B4',
    gold: '#FFD700',
  });

  Typography.loadTypographies({
    h1: { fontSize: 58, fontWeight: '300', lineHeight: 80 },
    h2: { fontSize: 46, fontWeight: '300', lineHeight: 64 },

    categoryItemTitle: { fontSize: 28, fontWeight: '300' },
    productItemTitle: { fontSize: 12, fontWeight: '300' }
  });

  Spacings.loadSpacings({
    page: 15,
  });
};
