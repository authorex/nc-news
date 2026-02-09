const {
  selectArticles,
  selectArticleById,
  updateArticleById,
} = require("../models/articles");

const getArticles = (req, res, next) => {
  selectArticles()
    .then((articles) => {
      res.status(200).json(articles);
    })
    .catch((err) => {
      next(err);
    });
};

const getArticleById = (req, res, next) => {
  const { article_id } = req.params;
  selectArticleById(article_id)
    .then((article) => {
      if (!article) {
        res.status(404).json({ error: "Article not found!" });
      } else {
        res.status(200).json(article);
      }
    })
    .catch((err) => {
      next(err);
    });
};

const updateArticle = (req, res, next) => {
  const { article_id } = req.params;
  const { inc_votes } = req.body;

  updateArticleById(article_id, inc_votes)
    .then((article) => {
      if (!article) {
        res.status(404).json({ error: "Article not updated!" });
      } else {
        res.status(200).json(article);
      }
    })
    .catch((err) => {
      next(err);
    });
};
module.exports = { getArticles, getArticleById, updateArticle };
