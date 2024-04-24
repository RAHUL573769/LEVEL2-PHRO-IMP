/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addToDo } from "@/features/toDoSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { FormEvent, useState } from "react";

export function DialogDemo() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [task, setTak] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [description, setDescription] = useState("");

  const dispatch = useAppDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const state = useAppSelector((state) => state.todos.todos); //we are getting todos from store // todos.todos  -->from todoslice

  // const { todos } = useAppSelector((state) => {
  //   state.todos;
  // });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const randomString = Math.random().toString(36).substring(2, 7);
    const taskDescription = {
      id: randomString,
      title: task,
      description: description
    };

    dispatch(addToDo(taskDescription));
    // console.log(task, description);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Add your task you want to Finish
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Add Task
              </Label>
              <Input
                onBlur={(e) => {
                  setTak(e.target.value);
                }}
                id="name"
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
  );
}
