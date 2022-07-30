const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      min: 6,
    },
  },
  { timestamps: true },
  { collection: "all_user" }
);

module.exports = mongoose.model("User", UserSchema);
