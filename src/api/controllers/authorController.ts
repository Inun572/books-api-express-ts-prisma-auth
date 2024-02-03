import { Request, Response } from 'express';
import {
  addAuthor,
  getAuthors,
} from '../services/authorServices';

export const getAllAuthors = async (
  req: Request,
  res: Response
) => {
  const data = await getAuthors();
  res.json({
    message: 'get authors success',
    authors: data,
  });
};

export const postAuthor = async (
  req: Request,
  res: Response
) => {
  const data = await addAuthor(req.body.author);
  res.json({
    message: 'add authors success',
    authors: data,
  });
};
