import "express-async-errors";
import "reflect-metadata";
import express from "express";
import handleError from "./errors/handleError";
import userRoutes from "./routes/users.routes";
import loginRoute from "./routes/session.routes";
import contactsRoutes from "./routes/contacts.routes";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/users/contacts", contactsRoutes);
app.use("/login", loginRoute);

app.use(handleError);

export default app;
