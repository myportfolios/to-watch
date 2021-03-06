const express = require("express");
const cors = require("cors");

//import mongoose
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
console.log(port);

app.use(cors());
app.use(express.json());

//connect server to Atlas MongoDB database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully!");
});
connection.on("error", error => {
  console.log("Warning", error);
});
const moviesRouter = require("./routes/movies");
const usersRouter = require("./routes/users");

app.use("/movies", moviesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
