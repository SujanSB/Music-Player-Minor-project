const { createPostValidator } = require("../helpers/valid");
const express = require("express");
const router = express.Router();
// const multer  = require('multer')
// const upload = multer({ dest: 'media/' })
// import uploadsrc from "../middleware/uploadPostMusic";
import upload from "../middleware/uploadPost";

const { requireSignin } = require("../controllers/auth.controller");

const { createPostController } = require("../controllers/post.controller");
const { getPostController } = require("../controllers/post.controller");
const { getPostByUserId } = require("../controllers/post.controller");

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

module.exports = router;
