const { selectArticles } = require("../models/articles");

const getArticles = (req, res, next) => {
  selectArticles()
    .then((articles) => {
      res.status(200).json(articles);
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = { getArticles };
