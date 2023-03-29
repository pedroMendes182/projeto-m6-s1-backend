import { Router } from "express";
import { createUserController } from "../controllers/users.controller";
import validateSchemasMiddleware from "../middlewares/validateData.middleware";
import verifyAlreadyUserExistsMiddleware from "../middlewares/verifyAlreadyUserExists.middleware";
import { createUserSchema } from "../schemas/users.schema";

const userRoutes = Router();

userRoutes.post(
  "",
  validateSchemasMiddleware(createUserSchema),
  verifyAlreadyUserExistsMiddleware,
  createUserController
);

export default userRoutes;
