/* @flow */
import ColorScheme from 'color-scheme';

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


