import { ReactNode } from "react";

export type TRoutes = {
  path: string;
  element: ReactNode;
};
export type TSideBar = {
  key: string;
  label: ReactNode;
  children?: TSideBar[];
};
