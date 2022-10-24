import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
const Counter = () => {
  const addedAmountRef = useRef();

  const dispatch = useDispatch();
  //by using useSelector the component is automatically subscribed to the store and gets the latest state snapshot
  const counter = useSelector((state) => state.counter);

  const increaseAmount = () => {
    dispatch({ type: "increment" });
  };

  const decreaseAmount = () => {
    dispatch({ type: "decrement" });
  };

  const addToCounter = (e) => {
    e.preventDefault();

    const addedAmount = addedAmountRef.current.value;
    const addedAmountNumber = +addedAmount;

    dispatch({ type: "addMultiple", amount: addedAmountNumber });
  };
  const toggleCounterHandler = () => {};

  return (
    <main>
      <h1>Redux Counter</h1>
      <div>{counter}</div>
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
