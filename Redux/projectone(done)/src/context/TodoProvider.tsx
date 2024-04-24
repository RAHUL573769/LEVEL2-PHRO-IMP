import React, { ReactNode, createContext } from "react";

const TodoContext = createContext(undefined);

type ToDoProps = {
  children: ReactNode;
};

const TodoProvider = ({ children }: ToDoProps) => {
  const values = {
    todoTitle: "this is todo title"
  };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
