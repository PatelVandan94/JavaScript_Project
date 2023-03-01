let mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Practice_database")
  .then(() => console.log("successfully connected"))
  .catch((err) => console.log(err));
