// app.js
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./data/db");
const routes = require("./routes/routes");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use("/", routes);

app.listen(`${process.env.PORT}`, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
