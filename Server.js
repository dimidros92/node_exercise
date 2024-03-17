const http = require("http");
const app = require("./App");

const sequelize = require("./db_config");
const port = 3000;
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection with database has been established successfully.");
    const server = http.createServer(app);
    server.listen(port);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
