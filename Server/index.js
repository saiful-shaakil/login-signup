const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();
const user = require("./router/user");

//PORT
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

//connecting mongoose
const uri = process.env.MONGO_URI;
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected to mongo");
  }
);

app.use("/", user);

//listening by port
app.listen(PORT, () => {
  console.log("Running Port is", PORT);
});
