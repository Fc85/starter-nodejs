const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 5000;

// BodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connexion à MongoDB avec Mongoose
mongoose.connect("mongodb://localhost:27017/pokecrud", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

// Routes
app.get("*", function (req, res) {
  res.send("Nothing here...");
});

// Port
app.listen(port, function () {
  console.log(
    `Listening port ${port}, started at : ${new Date().toLocaleString()}`
  );
});
