import PRODUCTS_DATA from "database/products";

const INITIAL_STATE = {
  collection: PRODUCTS_DATA
}

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
