//Defining constant
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

// State

const initialCounterState = {
  count: 0,
};
const initialUsersState = {
  users: [{ name: "anisul" }],
};

// action (Object type, payload)
// Increment counter
// Decrement counter
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};
const addUser = () => {
  return {
    type: ADD_USER,
    payload: { name: "shakil" },
  };
};
//create reducer for counter
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      state;
  }
};
//1.State
//2. dispatch action
//3. Reducer
//4. store
