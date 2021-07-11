import { StatusCodes } from 'http-status-codes';
import { IDataResponse } from '../interface/data.response';
import { IErrorResponse } from '../interface/error.response';

export const buildResponse = <Type>(
  statusCode: StatusCodes,
  message: string,
  data: Type,
): IDataResponse<Type> => ({
  data,
  statusCode,
  message,
});

export const buildErrorResponse = (
  statusCode: StatusCodes | number,
  message: string,
  errors?: never,
): IErrorResponse => ({
    statusCode,
    message,
    errors,
});
