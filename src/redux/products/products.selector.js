import { createSelector } from 'reselect';

const selectProducts = state => state.products;

export const selectAllProducts = createSelector(
  [selectProducts],
  (products) => products.collection
);