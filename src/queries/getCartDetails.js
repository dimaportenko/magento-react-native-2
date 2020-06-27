/** @noflow */
import { gql } from '@apollo/client';
import { ProductListingFragment } from './cartProductListingFragment';

export const GET_CART_DETAILS = gql`
    query getCartDetails($cartId: String!) {
      cart(cart_id: $cartId) @connection(key: "Cart") {
        ...ProductListingFragment
        prices {
            grand_total {
                value
                currency
            }
        }
    }
  }
  ${ProductListingFragment}
`;
