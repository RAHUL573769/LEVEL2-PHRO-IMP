import React, { useState } from "react";
// type TProps = {
//   count: number,
//   setCount: React.Dispatch<React.SetStateAction<number>>
// };

export const CounterWithFunctional = ({ count, setCount }) => {
  //   console.log("From Functional Component", props);

  return (
    <div className="border border-purple-500 p-10 m-10">
      {" "}
      <h1>Count Value :{count}</h1>
      <div
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count With Functional:{count}
      </div>
    </div>
  );
};

export default CounterWithFunctional;
