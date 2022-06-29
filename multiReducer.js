const { createStore, combineReducers } = require("redux");

//Product const
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";
//Product const
const GET_CART_ITEMS = "GET_PRODUCTS";
const ADD_CART_ITEMS = "ADD_CART_ITEMS";

//Product State
const initialProductsState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
};

//cart State
const initialCartsState = {
  carts: ["sugar"],
  numberOfProducts: 1,
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
//==============================
//Cart Action
const getCarts = () => {
  return {
    type: GET_CART_ITEMS,
  };
};
const addCart = (product) => {
  return {
    type: ADD_CART_ITEMS,
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

//Cart Reducer
function cartReducer(state = initialCartsState, action) {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
      };
    case ADD_CART_ITEMS:
      return {
        carts: [...state.carts, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});
//store
// const store = createStore(productReducer);
const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(getProducts());
store.dispatch(addProduct("pen"));
store.dispatch(getCarts());
store.dispatch(addCart("pen"));
