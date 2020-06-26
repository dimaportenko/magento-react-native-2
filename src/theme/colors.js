/* @flow */
import ColorScheme from 'color-scheme';
import { Colors } from 'react-native-ui-lib';

export const colors = {
  white: '#fff',
  gold: '#FFD700',
  control: Colors.rgba(Colors.black, 0.6),
  controlTint: Colors.white,
  primary: 'black',
  secondary: 'white',
  tertiary: '',
};

const scheme = new ColorScheme();
scheme.from_hue(130)
  .scheme('tetrade')
  .variation('soft');

export const categoryColors = scheme.colors();

export const getCategoryColorByIndex = (index: number): string => {
  const i = (index * 4 + Math.floor((index * 4) / categoryColors.length)) % categoryColors.length;
  const result = categoryColors[i];
  return `#${result}`;
};

// export const getColorPair = (index: number): { text: string, background: string } => {
//   const backgrounds = [
//     '#AAD0D9',
//     '#F7F7F7',
//     '#EED5D1',
//     '#E5B9B6⁣',
//   ];
//   const texts = [
//     '#0090B2',
//     '#DD756E',
//     '#C72B67',
//     '#A85252⁣',
//   ];
//
//   const i = index % backgrounds.length;
//
//   return {
//     text: texts[i],
//     background: backgrounds[i],
//   };
// };
//
//
// type RGB = {
//   b: number;
//   g: number;
//   r: number;
// }
// function rgbToYIQ({ r, g, b }: RGB): number {
//   return ((r * 299) + (g * 587) + (b * 114)) / 1000;
// }
// function hexToRgb(hex: string): ?RGB {
//   if (!hex || hex === undefined || hex === '') {
//     return undefined;
//   }
//
//   const result =
//     /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//
//   return result ? {
//     r: parseInt(result[1], 16),
//     g: parseInt(result[2], 16),
//     b: parseInt(result[3], 16)
//   } : undefined;
// }
// export function contrast(colorHex: string,
//                          threshold: number = 128): string {
//   if (colorHex === undefined) {
//     return '#000';
//   }
//
//   const rgb: ?RGB = hexToRgb(colorHex);
//
//   if (rgb === undefined || rgb === null) {
//     return '#000';
//   }
//
//   return rgbToYIQ(rgb) >= threshold ? '#000' : '#fff';
// }

/**
 * Hue (pure color)
 * Tint (hue + white)
 * Tone (hue + grey)
 * Shade (hue + black)
 */

/**
 * warm
 * cool
 * neutral
 */

/**
 * https://picular.co/
 * https://color.adobe.com/create/color-wheel
 * https://colorsupplyyy.com/app
 */

/**
 * Blues
 * Trust - Dependable - Strong
 */

/**
 * Green
 * Peaceful - Growth - Healthy
 */

/**
 * Yellows
 * Optimism - Clarity - Warmth
 */

/**
 * Reds
 * Exciting - Youthfull - Bold
 */

/**
 * Purple Violet
 * Creative - Wise - Imaginative
 */

/**
 * Oranges
 * Friendly - Cheerful - Confidence
 */

/**
 * Black
 * Boldness - Formality - Mystery
 * Strength - Luxuriousness and seriousness
 */

/**
 * White
 * Purity - Cleanliness - Innocence
 * Comfort - Hope
 */


