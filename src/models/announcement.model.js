import { Model, DataTypes } from "sequelize";
import sequelize from "../database.js";
import { Category } from "./category.model.js";

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
  price: { 
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
  },
  category_id: { 
    type: DataTypes.INTEGER,
    references: {
      model: Category,
      key: 'id',
    },
    allowNull: false,
  },
},
{
    sequelize,
    tableName: "announcement",
  }
);