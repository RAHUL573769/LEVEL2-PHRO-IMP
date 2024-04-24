// import { ADD_USER, DECREMENT, INCREMENT } from "./constants/constants";
import { createStore } from "@reduxjs/toolkit";
//defining constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";
//state
const initialCounterState = {
  count: 0
};

const initialUserState = {
  users: [{ name: "anisulHoque" }]
};

//actions->>TYPE+PAYLOAD(TO DATA transfer)
const incrementCounterAction = () => {
  return {
    type: INCREMENT
  };
};
const decrementCounterAction = () => {
  return {
    type: DECREMENT //action
  };
};
const addUserCounter = () => {
  return {
    type: ADD_USER,
    payload: { name: "shakil" }
  };
};
//creating reducer  (reducers are pure functions)

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };

    case DECREMENT: {
      return {
        ...state,
        count: state.count + 1
      };
    }
    default: {
      state;
    }
  }
};

//create store

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

//dispatch action

store.dispatch(incrementCounterAction());
// state;
// dispatch - action;
// reducer;
// store;-----getState(),dispatch()
//INCREMENT COUNTER
// {
//   type: "INCREMENT";
// }
//DECREMENT COUNTER
