import { createSlice } from "@reduxjs/toolkit";
import { TAction, TInitialState } from "../../../types/allTypes";

// export type TQuiz = {
//   module: string;
//   question: string;
//   description: string;
//   options: string[];
//   correctOptions: string[];
// };

// export type TInitialState = {
//   quiz: TQuiz[];
// };

// export type TAction = {
//   payload: TQuiz;
// };

const initialState: TInitialState = {
  quiz: []
};

const quizSlice = createSlice({
  name: "quiz",
  initialState: initialState,
  reducers: {
    addQuiz: (state, action: TAction) => {
      state.quiz.push(action.payload);
    }
  }
});

export default quizSlice.reducer;
export const { addQuiz } = quizSlice.actions;
