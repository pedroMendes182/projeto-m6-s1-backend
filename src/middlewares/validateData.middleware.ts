import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";
import AppError from "../errors/AppError";

const validateSchemasMiddleware =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validate = await schema.validate(req.body, {
        stripUnknown: true,
        abortEarly: false,
      });
      req.body = validate;
      return next();
    } catch (error) {
      throw new AppError(error.errors, 400);
    }
  };

export default validateSchemasMiddleware;
