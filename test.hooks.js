
import { sequelize } from "./src/models/model.js";
import { app } from "./src/app.js";

let server;

export const mochaHooks = {
  
  async beforeAll() {
    await sequelize.sync();
    server = await app.listen(process.env.PORT || 3001);
  },

  async afterAll() {
    await server.close();
    await sequelize.drop({ cascade: true, force: true });
    await sequelize.close();
  },

  async beforeEach() {
    await sequelize.truncate({ cascade: true, force: true });
  }
};