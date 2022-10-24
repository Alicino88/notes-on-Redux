import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

//redux toolkit uses a package called Immer that prevents overriding the existing state
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    addMultiple(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

/*BELOW REDUX LOGIC WITHOUT REDUX-TOOLKIT


//the new state object overrides the previous one, therefore when updating a piece of state we also need to set the other states as well
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    //with redux we never change the existing state but we always override it by returning a brand new state object
    //this has to do with the fact that objects are reference types
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
*/

//even with multiple slices, configureStore is called only once:
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
//redux toolkit automatically creates actions from reducers names
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
