const express = require("express");
const { getAllPosts, createPost } = require("../controllers/postControllers");
const requireAuth = require("../middleware/requireAuth");

const app = express.Router();
app.use(requireAuth);
app.route("/").get(getAllPosts).post(createPost);
module.exports = app;
