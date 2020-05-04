/** @flow */
import * as types from '../actions/types';
import type { Category } from '../../logic/types/magento';

type State = {
  categories: Category[],
}

const initialState: State = {
  categories: [],
};

export default (state: State = initialState, action) => {
  switch (action.type) {
    case types.CATEGORIES_DATA: {
      let { categories } = state;
      if (action?.payload?.length) {
        categories = action.payload.filter(
          (category: Category): boolean => (category.children_count || category.product_count)
        );
      }

      return { ...state, categories };
    }
    default:
      return state;
  }
};
