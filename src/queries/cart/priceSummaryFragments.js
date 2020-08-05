/** @noflow */
import { gql } from '@apollo/client';
import { DiscountSummaryFragment } from './discountSummary';
import { ShippingSummaryFragment } from './shippingSummary';
import { TaxSummaryFragment } from './taxSummaryFragment';


export const GrandTotalFragment = gql`
    fragment GrandTotalFragment on CartPrices {
        grand_total {
            currency
            value
        }
    }
`;

export const PriceSummaryFragment = gql`
    fragment PriceSummaryFragment on Cart {
        id
        items {
            id
            quantity
        }
        ...ShippingSummaryFragment
        prices {
            ...TaxSummaryFragment
            ...DiscountSummaryFragment
            ...GrandTotalFragment
            subtotal_excluding_tax {
                currency
                value
            }
        }
    }
    ${DiscountSummaryFragment}
    ${GrandTotalFragment}
    ${ShippingSummaryFragment}
    ${TaxSummaryFragment}
`;
