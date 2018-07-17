const express = require("express");
const router = express.Router();
var gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const mongoose = require("mongoose");

//Load input validation
const validateUpload = require("../../validation/upload");
//Load user model
const Video = require("../../models/UploadVideo");
const User = require("../../models/User");

// @route       GET api/users/test
//@description  Tests users route
//@access       Public

// @route       GET api/uploadVideo/upload
//@description  Upload Video
//@access       Public

//req.body is from body parser the .body part
router.post(
  "/upload",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateUpload(req.body);

    //Check Validation
    if (!isValid) {
      //Return any errors with 400 status
      return res.status(400).json(errors);
    }
    const newVideo = new Video({
      user: req.body.user,
      description: req.body.description,
      key: req.body.key,
      owner: req.body.owner
    });
    newVideo
      .save()
      .then(newVideo => res.json({ newVideo }))
      .catch(err => res.json(err));
    const user = req.body.user;
    User.findOne({ user })

      .then(user => {
        console.log(user);

        const newVideoKey = {
          videokey: req.body.key
        };
        //Add to experience array
        //we use unshift so it adds it at the beginning of the array.

        user.videokey.unshift(newVideoKey);
        user.save().then(() => {
          console.log("key added");
        });
      })
      .catch(err => console.log(err));
  }
);
router.post(
  "/addkey",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log("IN ADD KEY");
    const user = req.body.user;
    User.findOne({ user })
      .then(user => {
        const newVideoKey = {
          videokey: req.body.key
        };
        //Add to experience array
        //we use unshift so it adds it at the beginning of the array.
        user.videokey.unshift(newVideoKey);
        user.save().then(() => {
          res.json({ msg: "key added" });
        });
      })
      .catch(err => res.json({ err }));
  }
);

module.exports = router;
