import { createSlice } from "@reduxjs/toolkit";

type TInitialActiveStep = {
  activeStep: number;
};
const initialState: TInitialActiveStep = {
  activeStep: 0
};

const stepperSlice = createSlice({
  name: "stepper",
  initialState: initialState,
  reducers: {
    setActiveStepper: (state, action) => {
      state.activeStep = action.payload;
    }
  }
});

export const { setActiveStepper } = stepperSlice.actions;
export default stepperSlice.reducer;
