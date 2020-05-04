import * as types from './types';

export const categoriesList = categories => ({
  type: types.CATEGORIES_DATA,
  payload: categories,
});

