import { createStore } from "redux";

const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }
  if (action.type === "addMultiple") {
    //action payload: extra property I can add to action object
    return { counter: state.counter + action.amount };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
