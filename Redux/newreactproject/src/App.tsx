// import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "./hooks/hook";
import {
  decrement,
  increment,
  incrementByValue
} from "./redux/features/counterslice";
// import { RootState } from "@reduxjs/toolkit/query";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="h-screen w-full flex justify-center items-center ">
      <div className=" py-5  flex border border-purple-800">
        <button
          onClick={() => dispatch(increment(1))}
          className="px-3 py-2 bg-green-500 text-xl"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(incrementByValue(5))}
          // onClick={() => dispatch(incrementByValue({ value: 5 }))}
          className="px-3 py-2 bg-green-500 text-xl"
        >
          Increment By 5
        </button>
        <h1>{count}</h1>
        <button
          onClick={() => dispatch(decrement(-1))}
          className="px-3 py-2 bg-red-500 text-xl"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
