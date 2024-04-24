import mongoose from 'mongoose';
import { TErrorSource, TGenericError } from '../interface/error';

export const handleCastError = (
  err: mongoose.Error.CastError,
): TGenericError => {
  console.log('Ami Cast Error');
  const errorSources: TErrorSource = [
    {
      path: err.path,
      message: err.message,
    },
  ];
  const statusCode = 400;
  return {
    statusCode,
    errorSources,
    message: 'Cast Error Found',
  };
};
