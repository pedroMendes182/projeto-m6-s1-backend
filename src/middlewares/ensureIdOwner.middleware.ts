import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";

const ensureIdOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user.id !== req.params.id) {
    throw new AppError("Unauthorized", 401);
  }

  return next();
};

export default ensureIdOwnerMiddleware;
