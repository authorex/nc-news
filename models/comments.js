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

const insertComment = (articleId, username, body) => {
  return db
    .query(
      "INSERT INTO comments(article_id, body, votes, author, created_at) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [articleId, body, 0, username, new Date()],
    )
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      return err;
    });
};

module.exports = { selectCommentsByArticleId, insertComment };
