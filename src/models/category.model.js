import { Model, DataTypes } from "sequelize";
import sequelize from "../database.js";

export class Category extends Model {}

Category.init(
    {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  }, 
  {
    sequelize,
    tableName: 'category',
  }
);
  
 