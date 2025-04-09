import { Sequelize } from "sequelize";

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USERNAME as string;
const dbPassword = process.env.DB_PASSWORD as string;
const dbHost = process.env.DB_HOST as string;
const dbPort = parseInt(process.env.DB_PORT || "5432", 10);

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "postgres",
  host: dbHost,
  port: dbPort,
});

export default sequelize;
