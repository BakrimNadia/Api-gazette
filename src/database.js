import "dotenv/config";
import pg from 'pg';

import { Sequelize } from "sequelize";

const database = process.env.PG_URL;

console.log(database);
console.log(typeof database);

export const sequelize = new Sequelize(database , {
  dialectModule: pg,
  define: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  logging: false,
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default sequelize;