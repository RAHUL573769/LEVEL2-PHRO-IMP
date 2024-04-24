import { createSlice } from "@reduxjs/toolkit";
import { TInitialState } from "../../../Types/allTypes";

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
const initialState: TInitialState = {
  quiz: []
};

const quizSlice = createSlice({
  name: "quiz",
  initialState: initialState, //Quiz er First Stage ..is array because it increases ability to maintain sage
  reducers: {
    addQuiz: (state: TInitialState, action) => {
      console.log(state);
      state.quiz.push(action.payload);
    }
  }
});
export default quizSlice.reducer;
export const { addQuiz } = quizSlice.actions;
