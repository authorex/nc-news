const express = require("express");
const router = express.Router();

const { getTopics } = require("./controllers/topicsController");
const {
  getArticles,
  getArticleById,
} = require("./controllers/articlesController");
const { getUsers } = require("./controllers/usersController");
const { getCommentsByArticleId } = require("./controllers/commentsController");

router.get("/topics", getTopics);
router.get("/articles", getArticles);
router.get("/articles/:article_id", getArticleById);
router.get("/users", getUsers);
router.get("/articles/:article_id/comments", getCommentsByArticleId);

const app = express();
app.use(express.json());
app.use("/api", router);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Error!");
});

module.exports = app;
