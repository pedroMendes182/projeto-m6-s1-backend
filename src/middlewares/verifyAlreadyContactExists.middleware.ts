import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import AppError from "../errors/AppError";
import { User } from "../entities/users.entity";
import { Contact } from "../entities/contacts.entety";

const verifyAlreadyContactExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const usersRepository = AppDataSource.getRepository(User);
  const contactsRepository = AppDataSource.getRepository(Contact);

  const user = await usersRepository.findOneBy({
    id: req.user.id,
  });

  const findContactEmail = await contactsRepository
    .createQueryBuilder("contact_user")
    .where("contact_user.email = :email", { email: req.body.email })
    .andWhere("contact_user.userId = :userId", { userId: user.id })
    .getOne();

  if (findContactEmail) {
    throw new AppError("This email is already being used for a contact", 409);
  }

  const findContactPhone = await contactsRepository
    .createQueryBuilder("contact_user")
    .where("contact_user.phone = :phone", { phone: req.body.phone })
    .andWhere("contact_user.userId = :userId", { userId: user.id })
    .getOne();

  if (findContactPhone) {
    throw new AppError("This phone is already being used for a contact", 409);
  }

  return next();
};

export default verifyAlreadyContactExistsMiddleware;
