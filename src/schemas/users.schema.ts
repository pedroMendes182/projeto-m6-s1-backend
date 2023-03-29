import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserRequest } from "../interfaces/users.interface";

export const createUserSchema: SchemaOf<IUserRequest> = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  phone: yup
    .number()
    .integer()
    .min(10000000000, "Use a valid phone number")
    .max(99999999999, "use a valid phone number"),
  password: yup.string().required(),
});
