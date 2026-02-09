const { selectUsers } = require("../models/users");

const getUsers = (req, res, next) => {
  selectUsers()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = { getUsers };
