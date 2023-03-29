import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Contact } from "../entities/contacts.entety";
import AppError from "../errors/AppError";

const verifyUserTokenOwnerContactMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactsRepository = AppDataSource.getRepository(Contact);

  const findContact = await contactsRepository.findOne({
    where: {
      id: req.params.id,
    },
    relations: {
      user: true,
    },
  });

  if (findContact.user.id !== req.user.id) {
    throw new AppError("Unauthorized", 401);
  }

  return next();
};

export default verifyUserTokenOwnerContactMiddleware;
