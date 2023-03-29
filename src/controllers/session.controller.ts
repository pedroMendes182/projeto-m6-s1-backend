import { Request, Response } from "express";
import { IUserLogin } from "../interfaces/users.interface";
import loginUserService from "../services/session/loginUser.service";

const loginUserController = async (req: Request, res: Response) => {
  const user: IUserLogin = req.user;
  const token = await loginUserService(user);
  return res.json({ token });
};

export default loginUserController;
