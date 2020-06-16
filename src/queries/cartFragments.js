/** @noflow */
import { gql } from '@apollo/client';


export const CartFragment = gql`
    fragment CartPageFragment on Cart {
        id
        total_quantity
    }
`;


// import { GiftCardFragment } from './GiftCards/giftCardFragments';
// import { ProductListingFragment } from './ProductListing/productListingFragments';
// import { PriceSummaryFragment } from './PriceSummary/priceSummaryFragments';
// import { AppliedCouponsFragment } from './PriceAdjustments/CouponCode/couponCodeFragments';
//
// export const CartFragment = gql`
//     fragment CartPageFragment on Cart {
//         id
//         total_quantity
//         ...AppliedCouponsFragment
//         ...GiftCardFragment
//         ...ProductListingFragment
//         ...PriceSummaryFragment
//     }
//     ${AppliedCouponsFragment}
//     ${GiftCardFragment}
//     ${ProductListingFragment}
//     ${PriceSummaryFragment}
// `;
