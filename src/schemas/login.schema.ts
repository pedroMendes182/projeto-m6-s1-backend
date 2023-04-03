import * as yup from "yup";
import { SchemaOf } from "yup";
import { ILogin } from "../interfaces/login.interface";

export const loginSchema: SchemaOf<ILogin> = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
