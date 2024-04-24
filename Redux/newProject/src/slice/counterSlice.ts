import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };
const counterSlice = createSlice({
  name: "counter", //kon slicer er part
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    increment: (state, action) => {
      state.count = state.count + 1;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    decrement: (state, action) => {
      state.count = state.count - 1;
    }
  }
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
