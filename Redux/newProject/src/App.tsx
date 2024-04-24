import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./slice/counterSlice";

function App() {
  const { count } = useSelector((state) => {
    state.counter;
  });
  const dispatch = useDispatch();
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border border-purple-500 rounded-md ">
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-3 rounded-md bg-green-400 text-xl font-semibold "
        >
          Increment
        </button>
        <h1 className="text-xl mx-10">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-3 rounded-md bg-red-400 text-xl font-semibold "
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
