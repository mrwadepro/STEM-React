const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const VideoSchema = new Schema({
  video: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  description: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  key: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "user"
      }
    }
  ],
  filter: {
    type: [String],
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Video = mongoose.model("videos", VideoSchema);
