/** @flow */
import * as types from '../actions/types';
import type { Category } from '../../logic/types/magento';

type State = {
  categories: Category[],
}

type Action = {
  type: string,
  payload?: any
}

const initialState: State = {
  categories: [],
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case types.CATEGORIES_DATA: {
      let { categories } = state;
      if (action?.payload?.length) {
        categories = action.payload?.filter(
          (category: Category): boolean => (category.children_count > 0 || category.product_count > 0)
        );
      }

      return { ...state, categories };
    }
    default:
      return state;
  }
};
