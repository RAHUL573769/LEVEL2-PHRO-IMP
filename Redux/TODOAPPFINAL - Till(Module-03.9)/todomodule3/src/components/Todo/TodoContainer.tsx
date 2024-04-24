import { useAppSelector } from "@/redux/features/hook";
import TodoCard from "./TodoCard";
import TodoOperations from "./TodoOperations";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);

  return (
    <div>
      <TodoOperations></TodoOperations>
      <div className=" border border-blue-500 bg-primary-gradient w-full h-full rounded-xl space-y-10 p-[5px]">
        {todos.map((item) => (
          <TodoCard
            id={item.id}
            isCompleted={item.isCompleted}
            title={item.title}
            description={item.description}
          ></TodoCard>
        ))}

        {/* <TodoCard></TodoCard>
        <TodoCard></TodoCard>

        <TodoCard></TodoCard> */}

        {/* <TodoNoTask></TodoNoTask> */}
      </div>
    </div>
  );
};

export default TodoContainer;
