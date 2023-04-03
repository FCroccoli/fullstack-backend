import { Router } from "express";
import { validateAuthMiddleware } from "../middlewares/validateAuth.middleware";
import { createContactController } from "../controllers/contact/createContact.controller";
import { getContactsController } from "../controllers/contact/getContacts.controller";
import { deleteContactController } from "../controllers/contact/deleteContact.controller";
import { verifyContactExistsMiddleware } from "../middlewares/verifyContactExists.middleware";
import { updateContactController } from "../controllers/contact/updateContact.controller";
import { verifyUserIsActiveMiddleware } from "../middlewares/verifyUserIsActive.middleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.middleware";
import { contactCreateSerializer } from "../serializers/contact.serializers";
import { contactUpdateSerializer } from "../serializers/contact.serializers";

const contactRoutes = Router();

contactRoutes.post(
  "",
  validateAuthMiddleware,
  verifyUserIsActiveMiddleware,
  validateSchemaMiddleware(contactCreateSerializer),
  createContactController
);

contactRoutes.get(
  "",
  validateAuthMiddleware,
  verifyUserIsActiveMiddleware,
  getContactsController
);

contactRoutes.delete(
  "/:id",
  validateAuthMiddleware,
  verifyUserIsActiveMiddleware,
  verifyContactExistsMiddleware,
  deleteContactController
);

contactRoutes.patch(
  "/:id",
  validateAuthMiddleware,
  verifyUserIsActiveMiddleware,
  verifyContactExistsMiddleware,
  validateSchemaMiddleware(contactUpdateSerializer),
  updateContactController
);

export default contactRoutes;
