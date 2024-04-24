import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel
} from "@material-tailwind/react";
import { Square3Stack3DIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { CardWithLink } from "../Card/Card";
// import { SimpleRegistrationForm } from "../AddQuizForm/AddQuizFom";
import { DefaultStepper } from "../Steeper/Steeper";
import { SelectDefault } from "../SelectModule/SelectModule";
import { SimpleRegistrationForm } from "../AddQuizForm/AddQuizFom";

export function TabsWithIcon() {
  const steps = [
    {
      value: 0,
      name: "Select Module",
      component: <SelectDefault></SelectDefault>
    },
    {
      value: 1,
      name: "Add Quiz",
      component: <SimpleRegistrationForm></SimpleRegistrationForm>
    }
  ];
  const data = [
    {
      label: "Quiz List",
      value: "dashboard",
      icon: Square3Stack3DIcon,
      desc: <CardWithLink>Quiz List</CardWithLink>
    },

    {
      label: "Add Quiz",
      value: "settings",
      icon: Cog6ToothIcon,
      //   desc: <SimpleRegistrationForm></SimpleRegistrationForm>

      desc: (
        <CardWithLink>
          <DefaultStepper steps={steps}></DefaultStepper>
        </CardWithLink>
      )
    }
  ];
  return (
    <Tabs value="dashboard">
      <TabsHeader placeholder={undefined}>
        {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value} placeholder={undefined}>
            <div className="flex items-center gap-2">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody placeholder={undefined}>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
