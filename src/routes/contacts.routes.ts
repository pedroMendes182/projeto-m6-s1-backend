import { Router } from "express";
import {
  createContactController,
  deleteContactController,
} from "../controllers/contacts.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureContactExistsMiddleware from "../middlewares/ensureContactExists.middleware";
import validateSchemasMiddleware from "../middlewares/validateData.middleware";
import verifyAlreadyContactExistsMiddleware from "../middlewares/verifyAlreadyContactExists.middleware";
import { createContactSchema } from "../schemas/contacts.shema";

const contactsRoutes = Router();

contactsRoutes.post(
  "",
  validateSchemasMiddleware(createContactSchema),
  ensureAuthMiddleware,
  verifyAlreadyContactExistsMiddleware,
  createContactController
);
contactsRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureContactExistsMiddleware,
  deleteContactController
);

export default contactsRoutes;
