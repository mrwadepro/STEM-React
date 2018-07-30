const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const methodOverride = require("method-override");

//When we route to these files we will load them in below
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const videos = require("./routes/api/videos");

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
app.use("/api/videos", videos);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  //set static foler
  app.user(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
