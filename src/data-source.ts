import { DataSource, DataSourceOptions } from "typeorm";
import "dotenv/config";
import { User } from "./entities/user.entity";
import { Contact } from "./entities/contact.entity";
import { InitialMigration1680407096251 } from "./migrations/1680407096251-InitialMigration";
import "reflect-metadata";
import { InitialMigration1680486063720 } from "./migrations/1680486063720-InitialMigration";
import { InitialMigration1680493330472 } from "./migrations/1680493330472-InitialMigration";

const dataSourceConfig = (): DataSourceOptions => {
  const nodeEnv: string = process.env.NODE_ENV!;

  if (nodeEnv === "production") {
    return {
      type: "postgres",
      url: process.env.DATABASE_URL!,
      entities: [User, Contact],
      migrations: [],
    };
  }

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: ["src/entities/*.ts"],
    };
  }

  return {
    type: "postgres",
    host: process.env.PGHOST!,
    port: parseInt(process.env.PGPORT!),
    username: process.env.PGUSER!,
    password: process.env.PGPASSWORD!,
    database: process.env.PGDATABASE!,
    logging: false,
    entities: [User, Contact],
    migrations: [
      InitialMigration1680407096251,
      InitialMigration1680486063720,
      InitialMigration1680493330472,
    ],
  };
};

const AppDataSource = new DataSource(dataSourceConfig());

export default AppDataSource;
