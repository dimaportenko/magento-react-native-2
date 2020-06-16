/** @noflow */
import { gql } from '@apollo/client';

export const CREATE_CART = gql`
  mutation createCart {
    cartId: createEmptyCart
  }
`;
