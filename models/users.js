const db = require("../db/connection");

const selectUsers = () => {
  return db
    .query("SELECT username, name, avatar_url FROM users")
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      return err;
    });
};

module.exports = { selectUsers };
