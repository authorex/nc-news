const { selectTopics } = require("../models/topics");

const getTopics = (req, res, next) => {
  console.log("Im here1");
  selectTopics()
    .then((topics) => {
      console.log("Im here1", topics);
      res.status(200).json(topics);
    })
    .catch((err) => {
      nexconsole.log("Im here1");
      next(err);
    });
};

// const getTopics = (req, res) => {
//   res.send("Wiki home page");
// };

module.exports = { getTopics };
