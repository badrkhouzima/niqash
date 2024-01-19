import { useSelector, useDispatch } from "react-redux";
import "./Counter.css";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const toggletHandler = () => {
    dispatch({ type: "toggle" });
  };
  return (
    <div className="container">
      <h1>Counter to test store</h1>
      {show && <h2>{counter}</h2>}
      <button className="button" onClick={incrementHandler}>
        Increment
      </button>
      <button className="button" onClick={decrementHandler}>
        Decrement
      </button>
      <button className="button" onClick={toggletHandler}>
        toggle
      </button>
    </div>
  );
};

export default Counter;
