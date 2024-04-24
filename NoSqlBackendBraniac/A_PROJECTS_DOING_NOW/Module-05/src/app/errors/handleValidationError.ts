import mongoose from 'mongoose';
import { TErrorSource, TGenericError } from '../interface/error';

export const handleValidationError = (
  err: mongoose.Error.ValidationError,
): TGenericError => {
  // console.log(err.errors);
  // const values = Object.values(err.errors);
  // console.log(values);
  const errorSources: TErrorSource = Object.values(err.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: val?.path,
        message: val?.message,
      };
    },
  );
  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Validation Error',
    errorSources,
  };
};
