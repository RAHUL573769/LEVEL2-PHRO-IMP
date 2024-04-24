/* eslint-disable no-unused-vars */
import { ZodError } from 'zod';
import { TErrorIssues, TErrorSource } from '../../../types/types/types';

export const handleZodError = (error: ZodError): TErrorSource => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const issueArray: TErrorIssues[] = error.issues.map((singleIssue) => {
    // console.log('SingleIssue', singleIssue);
    return {
      path: singleIssue.path[singleIssue.path.length - 1] as string,
      message: singleIssue.message,
    };
  });
  return {
    message: 'ZOD ERROR!!!',
    statusCode: 404,
    status: 'FAILED',
    issues: issueArray,
  };
};
