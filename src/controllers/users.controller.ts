import { Request, Response } from "express";
import { IUserRequest } from "../interfaces/users.interface";
import showUserService from "../services/users/showUser.service";
import createUserService from "../services/users/createUser.service";
import updateUserService from "../services/users/updateUser.service";
import softDeleteUserService from "../services/users/softDeleteUser.service";
import listAllUsersService from "../services/users/listAllUsers.service";

export const createUserController = async (req: Request, res: Response) => {
  const newUser: IUserRequest = req.body;
  const data = await createUserService(newUser);
  return res.status(201).json(data);
};

export const showUserController = async (req: Request, res: Response) => {
  const data = await showUserService(req.user);
  return res.status(200).json({ user: data });
};

export const updateUserController = async (req: Request, res: Response) => {
  const data = await updateUserService(req.body, req.params.id);
  return res.status(200).json(data);
};

export const softDeleteUserController = async (req: Request, res: Response) => {
  const data = await softDeleteUserService(req.params.id);
  return res.status(204).json(data);
};

export const listAllUsersController = async (req: Request, res: Response) => {
  const data = await listAllUsersService();
  return res.status(200).json(data);
};
