const Post = require("../models/post.model");
const { errorHandler } = require("../helpers/dbErrorHandling");

const { validationResult } = require("express-validator");



exports.createPostController = async (req, res) => {
  // console.log(req.body)
  // console.log(req.files)
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const firstError = errors.array().map((error) => error.msg)[0];
    return res.status(422).json({
      errors: firstError,
    });
  } else {
    const { _id } = req.user;
    
    const newPost ={user: _id ,musicSrc:req.files.musicSrc[0].filename,thumbnail:req.files.thumbnail[0].filename,originalName:req.body.originalName,genre:req.body.genre}
    const post = new Post(newPost);
    
    post.save((err, post) => {
      if (err) {
        console.log(err);
        return res.status(401).json({
          errors: errorHandler(err),
        });
      } else {
        return res.json({
          success: true,
          post: post,
          message: "successfully posted",
        });
      }
    });
  }
};
