/**
 * @flow
 * TODO Document
 */
import type { ConfigurableVariant } from '../types/magento';

export const findMatchingVariant = ({
    variants,
    optionCodes,
    optionSelections,
  }: {
    variants: ConfigurableVariant[],
    optionCodes: Map<string, string>,
    optionSelections: Map<string, ?number>,
  }) => {

  return variants.find(({ attributes, product }) => {
    const customAttributes = (attributes || []).reduce(
      (map, { code, value_index }) => new Map(map).set(code, value_index),
      new Map()
    );

    for (const [id, value] of optionSelections) {
      const code = optionCodes.get(id);
      if (!code) {
        return false;
      }
      const matchesStandardAttribute = product[code] === value;
      const matchesCustomAttribute = customAttributes.get(code) === value;

      // if any option selection fails to match any standard attribute
      // and also fails to match any custom attribute
      // then this isn't the correct variant
      if (!matchesStandardAttribute && !matchesCustomAttribute) {
        return false;
      }
    }

    // otherwise, every option selection matched
    // and this is the correct variant
    return true;
  });
};
