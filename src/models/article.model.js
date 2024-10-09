import { Model, DataTypes } from "sequelize";
import sequelize from "../database.js";

export class Article extends Model {}

Article.init(
    {
  id: { 
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true 
  }, 
  titre: { 
    type: DataTypes.STRING, 
    allowNull: false 
  }, 
  sous_titre: { 
    type: DataTypes.STRING, 
    allowNull: true 
  }, 
  contenu: { 
    type: DataTypes.TEXT, 
    allowNull: false 
  }, 
  date_publication: { 
    type: DataTypes.DATE, 
    defaultValue: DataTypes.NOW 
  } 
},
{
    sequelize,
    tableName: "article",
  }
);