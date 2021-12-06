const mongoose = require("mongoose");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
require("dotenv").config();
mongoose
  .connect(process.env.DB_URI, options)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("DB connected");
  });
