import { Button } from "../ui/button";
import AddToDoModal from "./AddToDoModal";
import TodoFilter from "./TodoFilter";

const TodoOperations = () => {
  return (
    <div>
      <div className="flex justify-between mb-10">
        <Button>
          <AddToDoModal></AddToDoModal>
        </Button>

        <TodoFilter></TodoFilter>
      </div>
    </div>
  );
};

export default TodoOperations;
