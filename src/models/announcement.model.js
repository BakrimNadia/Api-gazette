import { Model, DataTypes } from "sequelize";
import sequelize from "../database.js";

export class Announcement extends Model {}

Announcement.init(
  {
  picture: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  title: { 
    type: DataTypes.STRING(255), 
    allowNull: false 
  }, 
  subtitle: { 
    type: DataTypes.STRING(255), 
    allowNull: true 
  }, 
  author: { 
    type: DataTypes.STRING(255), 
    allowNull: true 
  }, 
  content: { 
    type: DataTypes.TEXT, 
    allowNull: false 
  }, 
  date_publication: { 
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  } 
},
{
    sequelize,
    tableName: "announcement",
  }
);