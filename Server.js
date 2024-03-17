const http = require("http");
const app = require("./App");

const sequelize = require("./db_config");
const port = 3000;
(async () => {
  try {
    // login to database
    await sequelize.authenticate();
    console.log("Connection with database has been established successfully.");
    // sync models to database
    await sequelize.sync();
    console.log("All models are in-sync with the database.");
    // start express
    const server = http.createServer(app);
    server.listen(port);
    console.log("Server started.");
  } catch (error) {
    console.error("Error during server startup: \n", error);
  }
})();
