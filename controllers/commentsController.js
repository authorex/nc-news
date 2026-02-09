const {
  selectCommentsByArticleId,
  insertComment,
  deleteCommentById,
} = require("../models/comments");

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

const createComment = (req, res, next) => {
  const { article_id } = req.params;
  const { username, body } = req.body;
  insertComment(article_id, username, body)
    .then((comment) => {
      res.status(200).json(comment);
    })
    .catch((err) => {
      next(err);
    });
};

const deleteComment = (req, res, next) => {
  const { comment_id } = req.params;
  deleteCommentById(comment_id)
    .then((comment) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      next(err);
    });
};
module.exports = { getCommentsByArticleId, createComment, deleteComment };
