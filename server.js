const User = require("./models/User");

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("Mongo Error:", err));

app.post("/register", async (req, res) => {
  try {
    const user = new User(req.body); // Create a new user with data from frontend
    await user.save();               // Save it to MongoDB
    res.status(201).json({ message: "User saved successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});
