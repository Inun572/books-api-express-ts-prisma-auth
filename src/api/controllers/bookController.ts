import { Request, Response } from 'express';
import { getBooks as getAllBooks } from '../services/bookServices';

export const getBooks = async (
  req: Request,
  res: Response
) => {
  try {
    const books = await getAllBooks();
    res.json({ message: 'protected data', data: books });
  } catch (err) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

export const postBook = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      title,
      isbn,
      synopsys,
      author_id,
      publisher_id,
      category_id,
    } = req.body;

    res.json({
      message: 'Book created',
    });
  } catch (err) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};
