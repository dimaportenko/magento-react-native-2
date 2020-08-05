import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { Price } from '@magento/peregrine';

import { mergeClasses } from '../../../classify';

const DEFAULT_AMOUNT = {
    currency: 'USD',
    value: 0
};

/**
 * Reduces discounts array into a single amount.
 *
 * @param {Array} discounts
 */
const getDiscount = (discounts = []) => {
    // discounts from data can be null
    if (!discounts || !discounts.length) {
        return DEFAULT_AMOUNT;
    } else {
        return {
            currency: discounts[0].amount.currency,
            value: discounts.reduce(
                (acc, discount) => acc + discount.amount.value,
                0
            )
        };
    }
};


export const DiscountSummaryFragment = gql`
    fragment DiscountSummaryFragment on CartPrices {
        discounts {
            amount {
                currency
                value
            }
            label
        }
    }
`;

