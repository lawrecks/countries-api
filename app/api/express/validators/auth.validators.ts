import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import baseValidator from '.';

export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    username: Joi.string().required(),
  });
  baseValidator(schema, req, res, next, 'body');
};