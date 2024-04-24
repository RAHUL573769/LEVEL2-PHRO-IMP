import { useAppDispatch } from "@/redux/features/hook";
import { Button } from "../ui/button";
import { removeTodo, toggleComplete } from "@/redux/features/slice/todoSlice";

type TTodoCardProps = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority?: string;
};
const TodoCard = ({
  title,
  description,
  id,
  isCompleted,
  priority
}: TTodoCardProps) => {
  const dispatch = useAppDispatch();

  const handleComplete = () => {
    dispatch(toggleComplete(id));
  };
  return (
    <div>
      <div className="bg-white rounded-md flex justify-between items-center">
        <input
          onChange={handleComplete}
          type="checkbox"
          name="complete"
          id="complete"
        />

        <p className="font-semibold">{title}</p>
        <p className="font-semibold">
          {isCompleted ? (
            <p className="text-green-500">Done</p>
          ) : (
            <p className="text-red-500">"Pending"</p>
          )}
        </p>
        <p className="font-semibold">Time</p>
        <p className="font-semibold">{description}</p>
        <p>{priority}</p>
        <div className="space-x-5">
          <Button
            onClick={() => dispatch(removeTodo(id))}
            className="bg-red-500"
          >
            Delete
          </Button>
          <Button>Edit</Button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
