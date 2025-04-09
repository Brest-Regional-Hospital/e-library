import dotenv from "dotenv";
dotenv.config();

import express, { Express } from "express";
import sequelize from "./db";
import cors from "cors";
import "./models";
import routes from "./routes";

const PORT: number = parseInt(process.env.PORT || "5000", 10);

const app: Express = express();
app.use(cors());
app.use(express.json());
app.use("/api", routes);

const start = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.error("Server failed to start:", e);
  }
};

start();
