const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

// mongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/lecture01")
  .then(() => console.log("connected to mongodb://127.0.0.1:27017/lecture01"))
  .catch((err) => {
    console.error(err);
  });



app.use((req, res, next) => {
  next();
});
app.use(express.static("."));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");




app.listen(port);
