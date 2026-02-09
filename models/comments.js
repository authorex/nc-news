const db = require("../db/connection");

const selectCommentsByArticleId = (articleId) => {
  return db
    .query(
      "SELECT * FROM comments WHERE article_id = $1 ORDER BY created_at DESC",
      [articleId],
    )
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      return err;
    });
};

module.exports = { selectCommentsByArticleId };
