const express = require("express");
const router = express.Router();

const { getTopics } = require("./controllers/topicsController");
const { getArticles } = require("./controllers/articlesController");
const { getUsers } = require("./controllers/usersController");

router.get("/topics", getTopics);
router.get("/articles", getArticles);
router.get("/users", getUsers);
const app = express();
app.use(express.json());
app.use("/api", router);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Error!");
});
//const port = 3000;

// app.use((req, res, next) => {
//   req.isAdmin = true; // pass data to next middleware
//   console.log("Time:", Date.now());
//   next();
//   console.log("after everything");
// });

// app.use((req, res, next) => {
//   console.log("I am logged next");
//   console.log("req.isAdmin:", req.isAdmin);
//   next(); // Without invoking next, the request and response would not be passed on to the routes
// });

// app.get("/", (req, res) => {
//   res.send({ message: "Hello World!" });
// });

// app.get("/cats/:catId", (req, res) => {
//   console.log(req.params);
// });

// app.get("/cats/", (req, res) => {
//   const { grumpy } = req.query;
//   console.log(grumpy);
// });

// app.post("/", (req, res) => {
//   console.log(req.body);
// });

module.exports = app;
