const { selectCommentsByArticleId } = require("../models/comments");

const getCommentsByArticleId = (req, res, next) => {
  const { article_id } = req.params;
  selectCommentsByArticleId(article_id)
    .then((comments) => {
      res.status(200).json(comments);
    })
    .catch((err) => {
      next(err);
    });
};
module.exports = { getCommentsByArticleId };
