import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <h1>Counter with redux</h1>
      <button onClick={() => handleIncrement(5)}>Increment By 5</button>
      <button onClick={() => handleIncrement(1)}>Increment By 1</button>
      <div>{count}</div>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
