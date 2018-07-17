const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const methodOverride = require("method-override");

//When we route to these files we will load them in below
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const uploadVideo = require("./routes/api/uploadVideo");

const app = express();
//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());

//Passport Config
require("./config/passport")(passport);

//Use routes on usersjs, profile.js and posts.js the above we assigned them by the file paths

//Use Routes here
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/uploadVideo", uploadVideo);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
