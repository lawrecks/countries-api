/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt from 'jsonwebtoken';
import config from '../config';

const generateToken = async (payload: any) => {
  return jwt.sign(payload, config.JWT_SECRET, {
    expiresIn: '2h',
  });
};

export default generateToken;