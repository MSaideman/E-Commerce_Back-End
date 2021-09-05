const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");

// turn on express
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// initiate sequelize then run server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
