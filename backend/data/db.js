// db.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

console.log(`Your port is ${process.env.PORT}`); // 8626

mongoose.connect(`${process.env.DATABASE_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error(`MongoDB connection error: ${error.message}`);
});
db.once("open", function () {
  console.log("*********** Database connected successfully *********");
});
