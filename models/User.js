const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  pledgeDate: Date
});

module.exports = mongoose.model("User", userSchema);
