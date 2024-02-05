import { Request, Response } from 'express';
import {
  addAuthor,
  getAuthors,
  update,
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

export const editAuthor = async (
  req: Request,
  res: Response
) => {
  try {
    await update({
      id: Number(req.params.id),
      name: req.body.author,
    });

    res.json({
      message: 'update authors success',
    });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: 'Internal server error' });
  }
};
