const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    minlength: 3,
  },
  email: {
    type: String,
    require: true,
    unique: [true, "Email already exist!"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },
  age: Number,
  phone: {
    type: Number,
    require: true,
    min: 10,
  },
});

const StudentDetails = new mongoose.model(
  "StudentDatabase",
  studentSchema
);

module.exports = StudentDetails;
