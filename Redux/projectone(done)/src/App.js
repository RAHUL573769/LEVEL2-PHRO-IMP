import { useState } from "react";
// import { CounterWithClass } from "./Componenets/CounterComponents";
import CounterWithFunctional from "./Componenets/CounterWithFunctional";
// import { UserInfowithUseState } from "./Componenets/UserInfo";
import { UserInfowithUseState } from "./Componenets/UserInfo";
import { UserInfowithUseReducer } from "./Componenets/userinfousinguseReducer";
import TodoProvider from "./context/TodoProvider";
import TodoForm from "./Componenets/todo/TodoForm";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <TodoProvider>
      <h1>React App</h1>

      <TodoForm></TodoForm>
      {/* <CounterWithClass></CounterWithClass> */}
      <UserInfowithUseState></UserInfowithUseState>
      <UserInfowithUseReducer></UserInfowithUseReducer>
      {/* <CounterWithFunctional
        count={count}
        setCount={setCount}
      ></CounterWithFunctional> */}
    </TodoProvider>
  );
}

export default App;
