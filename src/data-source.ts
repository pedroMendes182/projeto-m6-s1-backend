import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "./entities/users.entity";
import { CreateUsersTable1680040695286 } from "./migrations/1680040695286-CreateUsersTable";
import { AddPhoneForUser1680044501466 } from "./migrations/1680044501466-AddPhoneForUser";
import { Contact } from "./entities/contacts.entety";
import { CreateContatcsTable1680105484758 } from "./migrations/1680105484758-CreateContatcsTable";
import { FixEmailAndPhoneColumn1680113212268 } from "./migrations/1680113212268-FixEmailAndPhoneColumn";

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"],
      }
    : {
        type: "postgres",
        host: process.env.PGHOST,
        port: parseInt(process.env.PGPORT!),
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        logging: true,
        synchronize: false,
        entities: [User, Contact],
        migrations: [
          CreateUsersTable1680040695286,
          AddPhoneForUser1680044501466,
          CreateContatcsTable1680105484758,
          FixEmailAndPhoneColumn1680113212268,
        ],
      }
);

export default AppDataSource;
