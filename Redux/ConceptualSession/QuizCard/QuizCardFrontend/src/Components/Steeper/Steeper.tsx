/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Stepper, Step } from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "../../redux/Hooks/hooks";
import { setActiveStepper } from "../../redux/features/Sttepper/stepperSlice";

const mySteps = [
  {
    value: 0,
    name: "Quiz List",
    component: <div>Quiz List</div>
  },
  {
    value: 1,
    name: "Add Quiz",
    component: <div>Add Quiz</div>
  }
];
type TStepperProps = {
  steps: {
    value: number;
    name: string;
    component: React.ReactNode;
  }[];
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function DefaultStepper({ steps }: TStepperProps) {
  // const [activeStep, setActiveStep] = React.useState(0);

  const { activeStep } = useAppSelector((state) => state.stepper);

  const dispatch = useAppDispatch();
  // const [isLastStep, setIsLastStep] = React.useState(false);
  // const [isFirstStep, setIsFirstStep] = React.useState(false);

  return (
    <div className="w-full py-4 px-8">
      <Stepper placeholder={""} activeStep={activeStep}>
        {/* <Step
          placeholder={""}
          onClick={() => dispatch(setActiveStepper(0))}
          className="px-8 w-fit"
        >
          Quiz List
        </Step>
        <Step
          className="px-8 w-fit"
          placeholder={""}
          onClick={() => dispatch(setActiveStepper(1))}
        >
          Add Quiz


        </Step> */}

        {steps.map((step) => (
          <Step
            className="px-8 w-fit"
            placeholder={""}
            onClick={() => dispatch(setActiveStepper(step.value))}
          >
            {step.name}
          </Step>
        ))}
      </Stepper>

      <div>{steps[activeStep].component}</div>
    </div>
  );
}
