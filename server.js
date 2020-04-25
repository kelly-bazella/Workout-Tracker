const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 3000

const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("Develop/public"));

const MONGODB_URI = process.env.MONGODD_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// routes
(require("./Develop/routes/api.js")(app));
(require("./Develop/routes/view.js")(app));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
