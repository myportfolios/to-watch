const router = require("express").Router();
let Movies = require("../models/movies.model");

router.route("/").get((req, res) => {
  Movies.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const title = req.body.title;
  const overview = req.body.overview;
  const year = Number(req.body.year);
  const poster = req.body.poster;
  const rating = Number(req.body.rating);
  const date = Date.parse(req.body.date);

  const newMovies = new Movies({
    username,
    title,
    overview,
    year,
    poster,
    rating,
    date
  });

  newMovies
    .save()
    .then(() => res.json("Title added!"))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
