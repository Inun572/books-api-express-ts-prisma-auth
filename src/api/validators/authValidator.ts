import { NextFunction, Request, Response } from 'express';
import { getUserByEmail } from '../services/authService';
import bcrypt from 'bcrypt';

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

  if (/^\S+@\S+\.\S+$/.test(req.body.email) === false) {
    return res
      .status(400)
      .json({ error: 'Invalid email format' });
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

  req.user = user;

  next();
};
