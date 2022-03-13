/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Response } from 'express';
import rateLimit from 'express-rate-limit';
import { skip } from 'graphql-resolvers';
import { decode, verify } from '../../../utils/helpers/auth.helpers';

export const verifyToken = async (req: any, res: Response, next: NextFunction) => {
  const decoded: any = decode(req);
  if (!decoded) {
    req.isAuth = false;
    return next();
  }
  req.decodedToken = decoded;
  const verified = await verify(req);
  if (!verified) {
    req.isAuth = false;
    return next();
  }
  req.isAuth = true;
  return next();
};

export const verifyAuth = async (args: any, req: any) => {
  if (!req?.isAuth) {
    throw new Error('Unauthorized!');
  }
  return skip;
};

export const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 30,
  message: 'You have exceeded the 30 requests in 1 minute limit!',
  headers: true,
});
