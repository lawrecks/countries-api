import { Response } from "express";

export const Success = (message: string, code: number, data = []) => ({
  status: 'success',
  message,
  code,
  data,
});

export const Error = (message: string, code: number) => ({
  status: 'error',
  message,
  code,
  data: null,
});

export const successResponse = (res: Response, message: string, code: number, data = {}) => {
  res.status(code).json({
    status: 'success',
    message,
    code,
    data,
  });
};
