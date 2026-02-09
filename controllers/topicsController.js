const { selectTopics } = require("../models/topics");

const getTopics = (req, res, next) => {
  selectTopics()
    .then((topics) => {
      res.status(200).json(topics);
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = { getTopics };
