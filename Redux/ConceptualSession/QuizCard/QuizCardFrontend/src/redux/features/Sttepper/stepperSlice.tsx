import { createSlice } from "@reduxjs/toolkit";
import { TInitialStepState } from "../../../Types/allTypes";

const initialState: TInitialStepState = {
  activeStep: 0
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const stepperSlice = createSlice({
  name: "stepper",
  initialState: initialState,
  reducers: {
    setActiveStepper: (state: TInitialStepState, action) => {
      state.activeStep = action.payload;
    }
  }
});
export default stepperSlice.reducer;
export const { setActiveStepper } = stepperSlice.actions;
