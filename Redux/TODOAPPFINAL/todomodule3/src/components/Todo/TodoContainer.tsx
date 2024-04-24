// import { useAppSelector } from "@/redux/features/hook";
import { useGetTodosQuery } from "@/redux/features/api/api";
import TodoCard from "./TodoCard";
import TodoOperations from "./TodoOperations";
import { JSX } from "react/jsx-runtime";

const TodoContainer = () => {
  // const { todos } = useAppSelector((state) => state.todos);

  const { data: todos, isLoading, isError } = useGetTodosQuery(undefined);
  console.log(todos);

  if (isLoading || isError) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <TodoOperations></TodoOperations>
      <div className=" border border-blue-500 bg-primary-gradient w-full h-full rounded-xl space-y-10 p-[5px]">
        {todos?.data?.map(
          (
            item: JSX.IntrinsicAttributes & {
              id: string;
              title: string;
              description: string;
              isCompleted?: boolean | undefined;
            }
          ) => (
            <TodoCard
              {...item}
              // id={item.id}
              // isCompleted={item?.isCompleted}
              // title={item.title}
              // description={item.description}
            ></TodoCard>
          )
        )}

        {/* <TodoCard></TodoCard>
        <TodoCard></TodoCard>

        <TodoCard></TodoCard> */}

        {/* <TodoNoTask></TodoNoTask> */}
      </div>
    </div>
  );
};

export default TodoContainer;
