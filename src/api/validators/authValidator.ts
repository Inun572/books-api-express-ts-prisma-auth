import { NextFunction, Request, Response } from 'express';
import { getUserByEmail } from '../services/authService';
import bcrypt from 'bcrypt';

export type userPublicData = {
  id: number;
  email: string;
  name: string;
  is_blocked: boolean;
  role_id: number;
};
export interface CustomRequest extends Request {
  user: userPublicData;
}

export const validateLoginRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let error = {};
  if (!req.body.email) {
    error = { ...error, email: 'Email is required' };
  }
  if (!req.body.password) {
    error = { ...error, password: 'Password is required' };
  }
  if (Object.keys(error).length > 0) {
    return res.status(400).json({ error });
  }

  const { email, password } = req.body;
  const user = await getUserByEmail(email);

  if (!user) {
    return res
      .status(400)
      .json({ message: 'User not found' });
  }
  if (!(await bcrypt.compare(password, user.password))) {
    return res
      .status(400)
      .json({ message: 'Password incorrect' });
  }

  (req as CustomRequest).user = user;

  next();
};
