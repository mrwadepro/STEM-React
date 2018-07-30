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
const Video = require("../../models/Video");
const User = require("../../models/User");

// @route       GET api/users/test
//@description  Tests users route
//@access       Public
router.get(
  "/getvideos",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Video.find({ owner: req.user.organization })
      .then(videos => {
        res.json(videos);
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
      .then(video => res.json(video))
      .catch(err => res.json(err));
  }
);

// @route   GET api/videos/video/:video_id
// @desc    Getvideo by video ID
// @access  Private

router.get(
  "/video/:video_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    console.log("WTF!");

    console.log(req.params.video_id);
    Video.find({ video: req.params.video_id })
      .then(video => {
        console.log({ video });
      })
      .catch(err => console.log(err));
    /*Video.findOne({ video: req.params.video_id })
      .then(video => {
        res.json(video);
      })
      .catch(err => {
        res.status(404).json({ video: "Video doesn't exist" });
      });*/
  }
);

module.exports = router;
