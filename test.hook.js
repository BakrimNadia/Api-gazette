import { sequelize } from "./src/models/index.js";
import { app } from "./app.js";

let server;

export const mochaHooks = {
  
  // Function for all tests
  async beforeAll() {
    // create tables in the database test
    await sequelize.sync();

    // Start the server
    server = await app.listen(process.env.PORT);
  },

  // Function after tests
  async afterAll() {
    // close the server
    await server.close();

    // delete all tables in the database test
    await sequelize.drop({ cascade: true, force: true });

    //close the connection to the database test
    await sequelize.close();
  },

  // Function before each test
  async beforeEach() {
    // delete all data in the tables
    await sequelize.truncate({ cascade: true, force: true });
  }
};