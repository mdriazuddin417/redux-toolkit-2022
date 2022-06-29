const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");
//redux -looger midle ware
//Product const
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

//Product State
const initialProductsState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
};

//product action
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const addProduct = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};

//product Reducer
function productReducer(state = initialProductsState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCTS:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
}

//store
const store = createStore(productReducer, applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(getProducts());
store.dispatch(addProduct("pen"));
