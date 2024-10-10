import { Model, DataTypes } from "sequelize";
import sequelize from "../database.js";

export class Announcement extends Model {}

Announcement.init(
    {
  id: { 
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true 
  }, 
  title: { 
    type: DataTypes.STRING, 
    allowNull: false 
  }, 
  author: { 
    type: DataTypes.STRING, 
    allowNull: true 
  }, 
  content: { 
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
    tableName: "announcement",
  }
);