import { ReactNode } from "react";

export type TContainerProps = {
  children: ReactNode;
};
export type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

export type TInitialState = {
  todos: TTodo[];
};
