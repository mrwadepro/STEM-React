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
router.get(
  "/getvideos",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Video.find({ owner: req.user.organization })
      .then(video => {
        res.json({ video });
      })
      .catch(err => res.json(err));
  }
);
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
      thumbnail: req.body.thumbnail,
      owner: req.body.owner
    });
    newVideo
      .save()
      .then(newVideo => res.json({ newVideo }))
      .catch(err => res.json(err));
  }
);

module.exports = router;
