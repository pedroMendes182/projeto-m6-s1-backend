import { Router } from "express";
import validateSchemasMiddleware from "../middlewares/validateData.middleware";
import verifyLoginMiddleware from "../middlewares/verifyLogin.middleware";
import { loginSchema } from "../schemas/login.schema";
import loginUserController from "../controllers/session.controller";

const loginRoute = Router();

loginRoute.post(
  "",
  validateSchemasMiddleware(loginSchema),
  verifyLoginMiddleware,
  loginUserController
);

export default loginRoute;
