const db = require("../db/connection");

const selectTopics = () => {
  return db
    .query("SELECT * FROM topics")
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      return err;
    });
};

module.exports = { selectTopics };
