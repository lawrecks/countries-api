import { Request, Response, NextFunction } from 'express';
import generateToken from '../../../utils/helpers/auth.helpers';
import { successResponse } from '../../../utils/helpers/response.helpers';

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username } = req.body;
    const token = await generateToken({ username, identifier: 'C-API' });    
    return successResponse(res, 'Login Successful', 200, { username, token });
  } catch (error) {
    next(error);
  }
};

export default login;
