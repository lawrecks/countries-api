/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt from 'jsonwebtoken';
import config from '../../config';

const generateToken = async (payload: any) => {
  return jwt.sign(payload, config.JWT_SECRET, {
    expiresIn: '2h',
  });
};

export const decodeToken = (token: string, secret: string) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return false;
  }
};

export const decode = (req: any) => {
    let token =
      req.headers['x-access-token'] || req.headers.authorization || req.query.token;
    if (!token) {
      return false;
    }
    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    }
    return decodeToken(token, config.JWT_SECRET);
};

export const verify = async (req: any) => {
    const {
      decodedToken: { identifier },
    } = req;
    if (identifier !== 'C-API') {
      return false;
    }
    return true;
};

export default generateToken;