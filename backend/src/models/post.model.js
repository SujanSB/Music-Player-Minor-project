const mongoose = require("mongoose");

// Post schema
const postSchema = new mongoose.Schema({
  originalName: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  thumbnail: {
    type: String,
  },
  musicSrc: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
});

module.exports = mongoose.model("Post", postSchema);
