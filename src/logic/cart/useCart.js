/**
 * @flow
 * Created by Dima Portenko on 16.06.2020
 */
import React from 'react';
import type { Product, ProductType } from '../types/magento';
import { useDispatch, useSelector } from 'react-redux';
import { cartAddItemRequestStart, cartId } from '../../redux/actions/cart';
import { CREATE_CART } from '../../queries/mutations/createCart';
import { GET_CART_DETAILS } from '../../queries/getCartDetails';
import { useMutation } from '@apollo/client';
import { useAwaitQuery } from '../../apollo/useAwaitQuery';
import type { CartReduxState } from '../../redux/types/state';
import type { StateRedux } from '../../redux/reducers';

type Props = {|

|};

type Result = {|
  addItemToCart(payload: Payload): Promise<any>,
  getCartDetails(): void,
|};

type Option = {|
  option_id: string,
  option_value: ?number,
|}


type Payload = {|
  addItemMutation: any,
  item: Product,
  options?: Array<Option>,
  parentSku?: string,
  productType: ProductType,
  quantity: number
|};

export const useCart = (): Result => {
  const cart = useSelector((state: StateRedux): CartReduxState => state.cart);
  const dispatch = useDispatch();

  const [fetchCartId] = useMutation(CREATE_CART);

  const fetchCartDetails = useAwaitQuery(GET_CART_DETAILS);


  const addItemToCart = async (payload: Payload) => {
    const {
      addItemMutation,
      item,
      quantity,
      parentSku
    } = payload;

    dispatch(cartAddItemRequestStart());

    const { cartId } = cart;
    // const { isSignedIn } = user;
    const isSignedIn = false;

    try {
      const variables = {
        cartId,
        parentSku,
        product: item,
        quantity,
        sku: item.sku
      };

      await addItemMutation({
        variables
      });
    } catch(error) {

    }
  };

  const createCart = async () => {
    try {
      // errors can come from graphql and are not thrown
      const { data, errors } = await fetchCartId({
        fetchPolicy: 'no-cache'
      });

      let receivePayload;

      if (errors) {
        receivePayload = new Error(errors);
      } else {
        receivePayload = data.cartId;
        dispatch(cartId(data.cartId));
        // write to storage in the background
        // saveCartId(data.cartId);
      }

      console.warn('data, errors', data, errors)
      // dispatch(actions.getCart.receive(receivePayload));
    } catch (error) {
      // dispatch(actions.getCart.receive(error));
      console.warn('error', error)
    }
  }

  const getCartDetails = async (payload) => {
    debugger
    // return async function thunk(dispatch, getState) {
    const { cartId } = cart;
    // const { isSignedIn } = user;
    const isSignedIn = false;

      // if there isn't a cart, create one then retry this operation
      if (!cartId) {
        await createCart();
        // await dispatch(
        //   createCart({
        //     fetchCartId
        //   })
        // );
        // return thunk(...arguments);
      }

    //   // Once we have the cart id indicate that we are starting to make
    //   // async requests for the details.
    //   dispatch(actions.getDetails.request(cartId));
    //
    //   try {
    //     const { data } = await fetchCartDetails({
    //       variables: { cartId },
    //       fetchPolicy: 'no-cache'
    //     });
    //     const { cart: details } = data;
    //
    //     dispatch(actions.getDetails.receive({ details }));
    //   } catch (error) {
    //     dispatch(actions.getDetails.receive(error));
    //
    //     const shouldResetCart = !error.networkError && isInvalidCart(error);
    //     if (shouldResetCart) {
    //       if (isSignedIn) {
    //         // Since simple persistence just deletes auth token without
    //         // informing Redux, we need to perform the sign out action
    //         // to reset the user and cart slices back to initial state.
    //         await dispatch(signOut());
    //       } else {
    //         // Delete the cached ID from local storage.
    //         await dispatch(removeCart());
    //       }
    //
    //       // Clear the cart data from apollo client if we get here and
    //       // have an apolloClient.
    //       if (apolloClient) {
    //         await clearCartDataFromCache(apolloClient);
    //       }
    //
    //       // Create a new one
    //       await dispatch(
    //         createCart({
    //           fetchCartId
    //         })
    //       );
    //
    //       // Retry this operation
    //       return thunk(...arguments);
    //     }
    //   }
    // };
  };

  return {
    addItemToCart,
    getCartDetails,
  };
};
