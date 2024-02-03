import { NextFunction, Request, Response } from 'express';
import { findToken } from '../services/authService';
import { CustomRequest } from '../validators/authValidator';
import prisma from '../../prisma';

export const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: 'Unauthenticated',
    });
  }

  const validToken = await findToken(token);

  if (!validToken) {
    return res.status(401).json({
      message: 'Invalid token',
    });
  }

  if (validToken.expires_at < new Date()) {
    return res.status(401).json({
      message: 'Token expired',
    });
  }

  if (validToken.user.is_blocked) {
    return res.status(401).json({
      message: 'User blocked',
    });
  }

  (req as CustomRequest).user = validToken.user;

  next();
};

export const authorizePermission = (permission: string) => {
  return async (
    req: CustomRequest,
    res: Response,
    next: NextFunction
  ) => {
    if (!req.user) {
      return res.status(401).json({
        message: 'Unauthorized',
      });
    }

    const permissionRecord =
      await prisma.permissionRole.findMany({
        where: {
          role_id: req.user.role_id,
        },
        include: {
          permission: true,
        },
      });

    const permissions = permissionRecord.map(
      (record) => record.permission.name
    );

    if (permissions.includes(permission)) {
      next();
    } else {
      return res.status(403).json({
        message: 'Forbidden',
      });
    }
  };
};
