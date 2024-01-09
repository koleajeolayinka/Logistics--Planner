// app.js
const express = require("express");
const routes = require("./routes/routes");
const dotenv = require("dotenv");
const cors = require('cors');
const mongoose = require("mongoose");
dotenv.config();

const app = express();
mongoose.connect(`${process.env.DATABASE_URL}`);

const db = mongoose.connection;

db.on("error", (error) => {
  console.error(`MongoDB connection error: ${error.message}`);
});

db.once("open", () => {
  console.log("*********** Database connected successfully *********");
});

app.use(express.json()); // Use express.json() for parsing the request body
app.use(cors());
app.use("/api", routes);

app.listen(`${process.env.PORT}`, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
