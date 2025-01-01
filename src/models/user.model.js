import { Model, DataTypes } from "sequelize";
import sequelize from "../database.js";

export class User extends Model {}

User.init(
    {
      avatar: {
        type: DataTypes.STRING(255),
        allowNull: true,
      }, 
      lastname: {
        type: DataTypes.STRING(125),
        allowNull: false,
      },
      firstname: {
        type: DataTypes.STRING(125),
        allowNull: false,
      },
       email: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(125),
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING(125),
        allowNull: false,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      tableName: "user",
    }
  );