/** @noflow */
import { gql } from '@apollo/client';
import { ProductListingFragment } from './cartProductListingFragment';

export const GET_PRODUCT_LISTING = gql`
    query getProductListing($cartId: String!) {
        cart(cart_id: $cartId) @connection(key: "Cart") {
            id
            ...ProductListingFragment
        }
    }
    ${ProductListingFragment}
`;
