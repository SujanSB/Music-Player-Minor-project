
const express = require("express");
const router = express.Router();

// Import middleware
const adminMiddleware = require('../middleware/adminCheck');

// Import controller
const {
  requireSignin
} = require("../controllers/auth.controller");
const {
  readController,
  updateController,
} = require("../controllers/user.controller");

router.get("/:id", requireSignin, readController);
router.put("/update", requireSignin, updateController);
router.put("/admin/update", requireSignin, adminMiddleware, updateController);

module.exports = router;
