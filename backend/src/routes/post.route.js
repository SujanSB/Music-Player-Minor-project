
const express = require("express");
const router = express.Router();

const {
    requireSignin
  } = require("../controllers/auth.controller");

  const {
    createPostController,
    
  } = require("../controllers/post.controller");

  router.post("/post", requireSignin, createPostController);

  
module.exports = router;
