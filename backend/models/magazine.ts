import { DataTypes } from "sequelize";
import sequelize from "../db";
import { Publication } from "./publication";

export const Magazine = sequelize.define("Magazines", {
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

Publication.hasOne(Magazine, {
  foreignKey: "publicationId",
  as: "magazine",
});
Magazine.belongsTo(Publication, {
  foreignKey: "publicationId",
});
