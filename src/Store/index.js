import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

//the new state object overrides the previous one, therefore when updating a piece of state we also need to set the other states as well

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    //with redux we never change the existing state but we always override it by returning a brand new state object
    //inside this block we cannot write:
    //state.counter++
    //return state
    return { counter: state.counter + 1, showCounter: state.showCounter };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1, showCounter: state.showCounter };
  }
  if (action.type === "addMultiple") {
    //action payload: extra property I can add to action object
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
