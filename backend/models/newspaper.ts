import { Model, DataTypes } from "sequelize";
import sequelize from "../db";
import { Publication } from "./publication";

export const Newspaper = sequelize.define("Newspapers", {
  publicationId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Publication,
      key: "id",
    },
  },
  issueDate: DataTypes.DATE,
});

Publication.hasOne(Newspaper, {
  foreignKey: "publicationId",
  as: "newspaper",
});
Newspaper.belongsTo(Publication, {
  foreignKey: "publicationId",
});
