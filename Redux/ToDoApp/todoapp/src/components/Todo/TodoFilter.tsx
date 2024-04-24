import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@radix-ui/react-dropdown-menu";

export const TodoFilter = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>Priority</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>High </DropdownMenuItem>
          <DropdownMenuItem>Medium</DropdownMenuItem>
          <DropdownMenuItem>Low</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TodoFilter;
