const { createStore } = require("redux");

//Defining constant
// const INCREMENT = "INCREMENT";
// const DECREMENT = "DECREMENT";
// const RESET = "RESET";
// const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const ADD_USER = "ADD_USER";

// State

const initialState = {
  count: 1,
  users: ["anis"],
};

// const initialUsersState = {
//   users: [{ name: "anisul" }],
// };

// action (Object type, payload)
// Increment counter
// Decrement counter
// const incrementCounterAction = () => {
//   return {
//     type: INCREMENT,
//   };
// };
// const decrementCounterAction = () => {
//   return {
//     type: DECREMENT,
//   };
// };
// const resetCrementCounterAction = () => {
//   return {
//     type: RESET,
//   };
// };
// const incrementCounterByValue = (value) => {
//   return {
//     type: INCREMENT_BY_VALUE,
//     payload: value,
//   };
// };
const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};
//create reducer for counter
// function counterReducer(state = initialState, action) {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         count: state.count + 1,
//       };

//     case DECREMENT:
//       return {
//         ...state,
//         count: state.count - 1,
//       };
//     case RESET:
//       return {
//         ...state,
//         count: 0,
//       };
//     case INCREMENT_BY_VALUE:
//       return {
//         ...state,
//         count: state.count + action.payload,
//       };

//     default:
//       state;
//   }
// }
//1.State
//2. dispatch action
//3. Reducer
//4. store -- getState(), dispatch() , subscribe()
//Create store
// const store = createStore(counterReducer);
// store.subscribe(() => {
//   console.log(store.getState());
// });
//dispatch action
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(decrementCounterAction());
// store.dispatch(decrementCounterAction());
// store.dispatch(incrementCounterByValue(5));
// store.dispatch(incrementCounterByValue(15));

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, action.payload],
        count: state.count + 1,
      };

    default:
      break;
  }
};

const store = createStore(userReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser("Riaz"));
store.dispatch(addUser("Miraz"));
