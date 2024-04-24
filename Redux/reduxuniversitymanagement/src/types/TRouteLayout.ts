import { ReactNode } from "react";

export type TUiRoute = {
  path: string;
  element: ReactNode;
};
export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TSideBarItems = {
  key: string;
  label: ReactNode;
  children?: TSideBarItems[];
};
export type TUserPath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
};
