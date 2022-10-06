const express = require("express");
const router = express.Router();

const controller = require("../controllers/blogs");

router.post("/", controller.createBlog);
router.get("/", controller.getBlogs);

module.exports = router;
