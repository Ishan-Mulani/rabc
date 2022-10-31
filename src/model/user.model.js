const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["basic", "supervisor", "admin"],
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
