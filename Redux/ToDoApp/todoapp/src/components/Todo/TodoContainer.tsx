/* eslint-disable @typescript-eslint/no-unused-vars */
// import TodoCard from "./TodoCard";

// import { Button } from "../ui/button";
import { useAppSelector } from "@/redux/hooks";
import { DialogDemo } from "./AddModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
// import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);

  return (
    <div>
      <h1>This is Todo Container</h1>

      <div className="flex justify-between mb-5">
        <DialogDemo></DialogDemo>
        <TodoFilter></TodoFilter>
        {/* <TodoFilter></TodoFilter> */}
      </div>

      <div className=" bg-red-500 w-full h-[500px] rounded-xl p-5 space-y-4">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos.map((item) => (
            <TodoCard
              title={item.title}
              description={item.description}
              id={item.id}
            ></TodoCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
