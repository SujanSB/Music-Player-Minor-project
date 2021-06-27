const { createPostValidator } = require("../helpers/valid");
const express = require("express");
const router = express.Router();
// const multer  = require('multer')
// const upload = multer({ dest: 'media/' })
// import uploadsrc from "../middleware/uploadPostMusic";
import upload from "../middleware/uploadPost";

const { requireSignin } = require("../controllers/auth.controller");

const { createPostController,getPostController,getPostByUserId,DeletemyPost,upLike } = require("../controllers/post.controller");


router.post(
  "/createPost",
  requireSignin,
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "musicSrc", maxCount: 1 },
  ]),
  createPostValidator,
  createPostController
);

router.get('',requireSignin,getPostController)

router.post('/getbuid',requireSignin,getPostByUserId);

router.delete('/delete/:id',requireSignin,DeletemyPost)

router.post('/uplike/:id',requireSignin,upLike)

module.exports = router;
