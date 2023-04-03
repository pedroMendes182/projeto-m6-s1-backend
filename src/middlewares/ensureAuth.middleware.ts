import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";
import jwt from "jsonwebtoken";
import "dotenv/config";

interface IDecd {
  isActive: boolean;
  iat: number;
  exp: number;
  sub: string;
}

const ensureAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let authorizathion = req.headers.authorization;

  if (!authorizathion) {
    throw new AppError("Missing authorization", 401);
  }

  authorizathion = authorizathion.split(" ")[1];

  return jwt.verify(
    authorizathion,
    process.env.SECRET_KEY,
    (err, decd: IDecd) => {
      if (err) {
        throw new AppError("Missing authorization", 401);
      }

      req.user = {
        id: decd.sub,
        isActive: decd.isActive,
      };

      next();
    }
  );
};

export default ensureAuthMiddleware;
