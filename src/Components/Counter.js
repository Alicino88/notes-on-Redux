import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { counterActions } from "../Store";
const Counter = () => {
  const addedAmountRef = useRef();

  const dispatch = useDispatch();
  //by using useSelector the component is automatically subscribed to the store and gets the latest state snapshot
  const counter = useSelector((state) => state.counter);
  const isVisible = useSelector((state) => state.showCounter);

  const increaseAmount = () => {
    dispatch(counterActions.increment());
  };

  const decreaseAmount = () => {
    dispatch(counterActions.decrement());
  };

  const addToCounter = (e) => {
    e.preventDefault();

    const addedAmount = addedAmountRef.current.value;
    const addedAmountNumber = +addedAmount;
    //the addedAmountNumber is stored inside a field named payload by default
    dispatch(counterActions.addMultiple(addedAmountNumber));
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main>
      <h1>Redux Counter</h1>
      {isVisible && <div>{counter}</div>}
      <div>
        <button onClick={increaseAmount}>increment by one</button>

        <button onClick={decreaseAmount}>decrement by one</button>
      </div>
      <form>
        <label>Amount:</label>
        <input type="number" ref={addedAmountRef}></input>
        <button onClick={addToCounter}>Add</button>
      </form>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
