import { Router } from "express";
import validateSchemasMiddleware from "../middlewares/validateData.middleware";
import { loginSchema } from "../schemas/login.schema";

const loginRoute = Router();

loginRoute.post("", validateSchemasMiddleware(loginSchema));

export default loginRoute;
