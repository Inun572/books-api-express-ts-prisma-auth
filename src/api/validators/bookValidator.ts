import { NextFunction, Request, Response } from 'express';

export const bookParamsValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.params.id) {
    return res.status(400).json({
      message: 'parameter of Book Id is required',
    });
  }

  if (isNaN(Number(req.params.id))) {
    return res.status(400).json({
      message: 'parameter of Book Id must be a number',
    });
  }

  next();
};
