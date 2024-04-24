/* eslint-disable @typescript-eslint/no-explicit-any */
import { TErrorSource, TGenericError } from '../interface/error';

export const handleDuplicateError = (err: any): TGenericError => {
  const errorSources: TErrorSource = [
    {
      path: '',
      message: err.message,
    },
  ];
  const statusCode = 400;
  return {
    statusCode,
    message: 'DplicateError',
    errorSources,
  };
};
