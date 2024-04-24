/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import { FormEvent, useState } from "react";
import { useAddTodosMutation } from "@/redux/features/api/api";
// import { useAppDispatch } from "@/redux/features/hook";
import { addTodo } from "@/redux/features/slice/todoSlice";
const AddToDoModal = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [task, setTask] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [description, setDescription] = useState("");

  // For Local StateManagement
  // const dispatch = useAppDispatch();

  //For Server
  // [actual,FunctionForPost,{data,isLOading}]
  const [addTodo, { data, isLoading, isSuccess }] = useAddTodosMutation();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const randomString = Math.random().toString(36).substring(2, 7);

    const taskDetails = {
      id: randomString,
      title: task,
      description: description
    };
    console.log(taskDetails);
    // dispatch(addTodo(taskDetails));

    //For ServerD
    addTodo(taskDetails);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Edit Profile</Button>
        </DialogTrigger>{" "}
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="task" className="text-right">
                  Task Name
                </Label>
                <Input
                  onBlur={(e) => {
                    setTask(e.target.value);
                  }}
                  id="task"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  onBlur={(e) => {
                    setDescription(e.target.value);
                  }}
                  id="description"
                  className="col-span-3"
                />
              </div>
            </div>
            <div>
              <Button type="submit">Save changes</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddToDoModal;
