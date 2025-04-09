import { Model, DataTypes } from "sequelize";
import sequelize from "../db";

export const Publication = sequelize.define("Publications", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  issueNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  amountInStock: DataTypes.INTEGER,
});
