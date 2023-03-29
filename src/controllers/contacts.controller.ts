import { Request, Response } from "express";
import createContactService from "../services/contacts/createContact.service";

const createContactController = async (req: Request, res: Response) => {
  const data = await createContactService(req.user, req.body);
  return res.status(200).json(data);
};

export default createContactController;
