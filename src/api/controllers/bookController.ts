import { Response } from 'express';
import { CustomRequest } from '../validators/authValidator';

export const getBooks = async (
  req: CustomRequest,
  res: Response
) => {
  res.json({ message: 'protected data' });
};
