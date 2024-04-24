import { ZodError, ZodIssue } from 'zod';
import { TErrorSource, TGenericError } from '../interfaces/error';

export const handleZodError = (err: ZodError): TGenericError => {
  const errorSources: TErrorSource = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue.message,
    };
  });
  const statusCode = 400;
  return {
    statusCode,
    message: 'Zod Validation Error',
    errorSources,
  };
};
