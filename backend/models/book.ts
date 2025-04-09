import { Model, DataTypes } from "sequelize";
import sequelize from "../db";
import { Publication } from "./publication";

export const Book = sequelize.define("Books", {
  publicationId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Publication,
      key: "id",
    },
  },
  genre: DataTypes.STRING,
  author: DataTypes.STRING,
});

Publication.hasOne(Book, {
  foreignKey: "publicationId",
  as: "book",
});
Book.belongsTo(Publication, {
  foreignKey: "publicationId",
});
