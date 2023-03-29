import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import AppError from "../errors/AppError";
import { User } from "../entities/users.entity";
import { validate } from "uuid";

const ensureUserExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const usersRepository = AppDataSource.getRepository(User);
  const id = req.params.id;
  const validateId = validate(id);

  if (!validateId) {
    throw new AppError("This uuid not is valid!", 400);
  }

  const findUser = await usersRepository.findOneBy({
    id: id,
  });

  if (!findUser) {
    throw new AppError("User not found!", 404);
  }

  return next();
};

export default ensureUserExistsMiddleware;
