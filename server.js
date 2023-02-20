const express = require("express");
const connectDB = require("./dbinit");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
require("dotenv").config();
require("colors");
const PORT = process.env.PORT;
connectDB();
//middleware
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.get("/", (req, res) => {
  res.send("JWT Auth");
});
app.use("/user", userRoutes);
app.use("/posts", postRoutes);
app.listen(PORT, () => {
  console.log("connected to `http:localhost:${PORT}`");
});
