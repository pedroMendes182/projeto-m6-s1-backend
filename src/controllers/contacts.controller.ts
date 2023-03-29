import { Request, Response } from "express";
import createContactService from "../services/contacts/createContact.service";
import deleteContactService from "../services/contacts/deleteContact.service";
import showContactService from "../services/contacts/showContact.service";

export const createContactController = async (req: Request, res: Response) => {
  const data = await createContactService(req.user, req.body);
  return res.status(200).json(data);
};

export const showContactController = async (req: Request, res: Response) => {
  const data = await showContactService(req.params.id);
  return res.status(200).json(data);
};

export const deleteContactController = async (req: Request, res: Response) => {
  const data = await deleteContactService(req.params.id);
  return res.status(204).json(data);
};
