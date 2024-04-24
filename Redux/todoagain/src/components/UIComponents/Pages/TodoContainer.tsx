import React from "react";
import TodoCars from "./TodoCars";
import { Button } from "@/components/ui/button";

const TodoContainer = () => {
  return (
    <div>
      <h1>My -Todo</h1>

      <div className="flex justify-between">
        <Button>Add ToDo</Button>
        <Button>Filter</Button>
      </div>

      <div className="bg-red-500 w-full h-full rounded-xl p-5 space-y-6">
        <TodoCars></TodoCars>
        <TodoCars></TodoCars>
        <TodoCars></TodoCars>
        <TodoCars></TodoCars>

        <div>
          <h1 className="text-white text-2xl  font-bold">
            There is no task pending
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
