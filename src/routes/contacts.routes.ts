import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  showContactController,
  updateContactController,
} from "../controllers/contacts.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureContactExistsMiddleware from "../middlewares/ensureContactExists.middleware";
import validateSchemasMiddleware from "../middlewares/validateData.middleware";
import verifyAlreadyContactExistsMiddleware from "../middlewares/verifyAlreadyContactExists.middleware";
import verifyUserTokenOwnerContactMiddleware from "../middlewares/verifyUserTokenIsOwnerContact.middleware";
import {
  createContactSchema,
  updateContactSchema,
} from "../schemas/contacts.shema";

const contactsRoutes = Router();

contactsRoutes.post(
  "",
  validateSchemasMiddleware(createContactSchema),
  ensureAuthMiddleware,
  verifyAlreadyContactExistsMiddleware,
  createContactController
);
contactsRoutes.get(
  "/:id",
  ensureAuthMiddleware,
  ensureContactExistsMiddleware,
  verifyUserTokenOwnerContactMiddleware,
  showContactController
);
contactsRoutes.patch(
  "/:id",
  validateSchemasMiddleware(updateContactSchema),
  ensureAuthMiddleware,
  ensureContactExistsMiddleware,
  verifyUserTokenOwnerContactMiddleware,
  updateContactController
);
contactsRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureContactExistsMiddleware,
  verifyUserTokenOwnerContactMiddleware,
  deleteContactController
);

export default contactsRoutes;
