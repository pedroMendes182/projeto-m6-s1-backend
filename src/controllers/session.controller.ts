import { Request, Response } from "express";
import loginUserService from "../services/session/loginUser.service";

const loginUserController = async (req: Request, res: Response) => {
  const token = await loginUserService(req.user.id);
  return res.json({ token });
};

export default loginUserController;
