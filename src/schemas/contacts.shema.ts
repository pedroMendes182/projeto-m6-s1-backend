import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IContactRequest,
  IContactUpdate,
} from "../interfaces/contacts.interface";

export const createContactSchema: SchemaOf<IContactRequest> = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    name: yup.string().required(),
    phone: yup
      .number()
      .integer()
      .min(10000000000, "Use a valid phone number")
      .max(99999999999, "use a valid phone number")
      .required(),
  });

export const updateContactSchema: SchemaOf<IContactUpdate> = yup
  .object()
  .shape({
    email: yup.string().email().notRequired(),
    name: yup.string().notRequired(),
    phone: yup
      .number()
      .integer()
      .min(10000000000, "Use a valid phone number")
      .max(99999999999, "use a valid phone number")
      .notRequired(),
  });
