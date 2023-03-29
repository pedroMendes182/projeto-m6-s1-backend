import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import AppError from "../errors/AppError";
import { Contact } from "../entities/contacts.entety";
import { validate } from "uuid";

const ensureContactExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactsRepository = AppDataSource.getRepository(Contact);
  const contactId = req.params.id;
  const validateId = validate(contactId);

  if (!validateId) {
    throw new AppError("This uuid not is valid!", 400);
  }

  const findContact = await contactsRepository.findOneBy({
    id: contactId,
  });

  if (!findContact) {
    throw new AppError("Contact not found!", 404);
  }

  return next();
};

export default ensureContactExistsMiddleware;
