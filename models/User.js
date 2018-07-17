const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  videokey: [
    {
      type: String
    }
  ],
  organization: {
    type: String,
    required: true
  },
  account_type: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

//mongoose.model first parameter is name we want to use then the second is the actual scheme that we created above.
module.exports = Users = mongoose.model("users", UserSchema);
