import { NextFunction, Request, Response } from 'express';

export const authorValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.params.id) {
    return res.status(400).json({
      message: 'parameter of Author Id is required',
    });
  }

  if (isNaN(Number(req.params.id))) {
    return res.status(400).json({
      message: 'parameter of Author Id must be a number',
    });
  }

  if (!req.body.author) {
    return res.status(400).json({
      message: "Author's name is required",
    });
  }

  if (typeof req.body.author !== 'string') {
    return res.status(400).json({
      message: "Author's name must be a string",
    });
  }

  next();
};
