/** @flow */

const customAttributes = {
    fashion_color: 'swatch',
};

export default ({ attribute_code: code }: { attribute_code: string } = {}): ?string => customAttributes[code];
