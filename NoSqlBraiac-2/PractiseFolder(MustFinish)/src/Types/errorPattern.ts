export type TError = {
  message: string;
  error: string;
  status: string;
  statusCode: number;
  issues: [
    {
      path: string;
      message: string;
      stack: any;
    }
  ];
};
