/** @flow */
import type { Category } from '../../logic/types/magento';

type State = {
  categories: Category[],
}

type Action =
  | { type: 'CATEGORIES_DATA', payload?: Category[] }
  | { type: "Test", baz: string };

const initialState: State = {
  categories: [],
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'CATEGORIES_DATA': {
      let categories: Category[] = state.categories;
      if (action.payload) {
        categories = action.payload.filter(
          (category: Category): boolean => (category.children_count > 0 || category.product_count > 0)
        );
      }

      return { ...state, categories };
    }
    default:
      return state;
  }
};
