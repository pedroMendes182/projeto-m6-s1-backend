import { Request, Response, NextFunction } from "express";
import { compare } from "bcryptjs";
import AppDataSource from "../data-source";
import { User } from "../entities/users.entity";
import AppError from "../errors/AppError";

const verifyLoginMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);

  const email = req.body.email;

  const findUser = await userRepository.findOneBy({
    email: email,
  });

  if (!findUser) {
    throw new AppError("Wrong email/password", 400);
  }

  if (!findUser.isActive) {
    throw new AppError("Wrong email/password", 400);
  }

  const password = req.body.password;
  const comparePassword = await compare(password, findUser.password);

  if (!comparePassword) {
    throw new AppError("Wrong email/password", 400);
  }

  req.user = findUser;

  return next();
};

export default verifyLoginMiddleware;
