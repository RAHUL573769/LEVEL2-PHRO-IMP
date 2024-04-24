/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { setActiveStepper } from "../redux/features/stteper/stepperSlice";

type TSteeperProps = {
  steps: {
    value: number;
    name: string;

    component: React.ReactNode;
  }[];
};
export function DefaultStepper({ steps }: TSteeperProps) {
  const { activeStep } = useAppSelector((state) => state.stepper);

  const dispatch = useAppDispatch();

  return (
    <div className="w-full py-4 px-8">
      <Stepper placeholder={""} activeStep={activeStep}>
        {steps.map((step) => (
          <Step
            className="px-8 w-fit"
            placeholder={""}
            onClick={() => dispatch(setActiveStepper(step.value))}
          >
            {step.name}
          </Step>
        ))}
        {/* <Step
          className="px-8 w-fit"
          placeholder={""}
          onClick={() => dispatch(setActiveStepper(0))}
        >
          Quiz List
        </Step> */}
        {/* <Step
          className="px-8 w-fit"
          placeholder={""}
          onClick={() => dispatch(setActiveStepper(1))}
        >
          Add Quiz
        </Step> */}
      </Stepper>
      <div>{steps[activeStep].component}</div>
    </div>
  );
}
