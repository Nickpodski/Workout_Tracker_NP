const path = require('path');
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require('./routes');

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Projects", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.use(routes);

app.listen(process.env.PORT || 3000, () => console.log('Now listening'));