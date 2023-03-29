import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/users.entity";
import AppError from "../errors/AppError";

const verifyAlreadyUserExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const email = req.body.email;
  const phone = req.body.phone;

  const usersRepository = AppDataSource.getRepository(User);

  const findEmail = await usersRepository.findOneBy({
    email: email,
  });

  if (findEmail) {
    throw new AppError("This e-mail is already registered", 409);
  }

  const findPhone = await usersRepository.findOneBy({
    phone: phone,
  });

  if (findPhone) {
    throw new AppError("This phone is already registered", 409);
  }

  return next();
};

export default verifyAlreadyUserExistsMiddleware;
