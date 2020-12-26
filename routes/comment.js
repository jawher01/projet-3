const express = require("express");
const router = express.Router();
const comment = require("../models/comment");
const controllers=require("../controllers/comment");

//post comment
router.post("/:id", controllers.Postcomment);

// get all comment
router.get("/", controllers.GetAllComment);

//delete comment
router.get("/:id", controllers.DeleteOnecomment);

module.exports = router;


