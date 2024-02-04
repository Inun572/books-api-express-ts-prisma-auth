import { Request, Response } from 'express';
import {
  createToken,
  getUsers as getAllUsers,
} from '../services/authService';

export const login = async (
  req: Request,
  res: Response
) => {
  try {
    if (req.user) {
      const userId = req.user.id;
      const token = await createToken(userId);

      if (!token) {
        return res
          .status(500)
          .json({ error: 'Failed to create token' });
      }

      res.json({
        message: 'login success',
        token: token.token,
      });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getUsers = async (
  req: Request,
  res: Response
) => {
  const data = await getAllUsers();
  res.json({ message: 'get users success', users: data });
};
