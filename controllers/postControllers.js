const Post = require("../model/Post");
const getAllPosts = async (req, res) => {
  try {
    const user_id = req.user._id;
    const post = await Post.find({ user_id });
    if (!post.length) {
      return res.status(404).json({ message: "No posts found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const createPost = async (req, res) => {
  const { title, body } = req.body;
  let emptyFields = [];
  if (!title) {
    emptyFields.push("title");
  }
  if (!body) {
    emptyFields.push("body");
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: "Please insert all the fields" });
  }
  try {
    const user_id = req.user._id;
    const post = await Post.create({ title, body, user_id });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = { getAllPosts, createPost };
