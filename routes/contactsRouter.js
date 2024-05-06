import express from "express";
import {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
  updateStatusContact,
} from "../controllers/contactsControllers.js";

import {validateBody} from "../middlewares/index.js";

import {isValidId} from "../helpers/index.js";

import { createContactSchema } from "../schemas/contactsSchemas.js";

import { updateContactSchema } from "../schemas/contactsSchemas.js";

import { updateStatusSchema } from "../schemas/contactsSchemas.js";

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", isValidId, getOneContact);

contactsRouter.delete("/:id", isValidId, deleteContact);

contactsRouter.post("/", validateBody(createContactSchema), createContact);

contactsRouter.put(
  "/:id",
  isValidId,
  validateBody(updateContactSchema),
  updateContact
);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  validateBody(updateStatusSchema),
  updateStatusContact
);

export default contactsRouter;
