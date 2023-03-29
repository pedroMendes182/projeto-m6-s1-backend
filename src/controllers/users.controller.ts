import { Request, Response } from "express";
import { IUserRequest } from "../interfaces/users.interface";
import createUserService from "../services/users/createUser.service";

export const createUserController = async (req: Request, res: Response) => {
  const newUser: IUserRequest = req.body;
  const user = await createUserService(newUser);
  return res.status(201).json(user);
};
