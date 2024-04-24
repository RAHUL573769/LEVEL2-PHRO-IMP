export type TErrorResponse = {
  message: string;

  statusCode: number;
  status: string;
  issues: TErrorIssues[];
  // issues: {
  //   path: string;
  //   message: string;
  // }[];
};

export type TErrorIssues = {
  path: string;
  message: string;
};
