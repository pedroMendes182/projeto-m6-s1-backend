import { Router } from "express";
import {
  createUserController,
  showUserController,
  updateUserController,
} from "../controllers/users.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIdOwnerMiddleware from "../middlewares/ensureIdOwner.middleware";
import ensureUserExistsMiddleware from "../middlewares/ensureUserExists.middleware";
import validateSchemasMiddleware from "../middlewares/validateData.middleware";
import verifyAlreadyUserExistsMiddleware from "../middlewares/verifyAlreadyUserExists.middleware";
import { createUserSchema, updateUserSchema } from "../schemas/users.schema";

const userRoutes = Router();

userRoutes.post(
  "",
  validateSchemasMiddleware(createUserSchema),
  verifyAlreadyUserExistsMiddleware,
  createUserController
);
userRoutes.get(
  "/:id",
  ensureUserExistsMiddleware,
  ensureAuthMiddleware,
  ensureIdOwnerMiddleware,
  showUserController
);
userRoutes.patch(
  "/:id",
  validateSchemasMiddleware(updateUserSchema),
  ensureUserExistsMiddleware,
  ensureAuthMiddleware,
  ensureIdOwnerMiddleware,
  updateUserController
);

export default userRoutes;
