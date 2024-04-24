import { TInitialState, TTodo } from "@/types/AllTypes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: TInitialState = {
  todos: []
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      // console.log("State From addTodoReducer", state);
      // console.log("Payload From addTodoReducer", action);
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const task = state.todos.find((item) => item.id === action.payload);

      task!.isCompleted = !task?.isCompleted; //Didn't Understand
    }
  }
});
export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
