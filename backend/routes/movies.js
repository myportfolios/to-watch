const router = require("express").Router();
let Movies = require("../models/movies.model");
/*******get all movies endpoint**********/
router.route("/").get((req, res) => {
  Movies.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

/*******add new movies endpoint**********/
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
/*******get a particular movie using its ID endpoint**********/
router.route("/:id").get((req, res) => {
  Movies.findById(req.params.id)
    .then(movies => res.json(movies))
    .catch(err => res.status(400).json(`Error ${err}`));
});

/*******Delete a particular movie using its ID endpoint**********/
router.route("/:id").delete((req, res) => {
  Movies.findByIdAndDelete(req.params.id)
    .then(() => res.json("Movie Deleted"))
    .catch(err => res.status(400).json(`Error ${err}`));
});

/*******update a particular movie using its ID endpoint**********/
/*******NOTE:Not applicable to my backend**********/
router.route("/update/:id").post((req, res) => {
  Movies.findById(req.params.id)
    .then(movies => {
      movies.username = req.body.username;
      movies.title = req.body.title;
      movies.overview = req.body.overview;
      movies.year = req.body.year;
      movies.poster = req.body.poster;
      movies.rating = req.body.rating;
      movies.date = req.body.date;
      movies
        .save()
        .then(() => res.json("Movie Updated"))
        .catch(err => res.status(400).json(`Error ${err}`));
    })
    .catch(err => res.status(400).json(`Error ${err}`));
});
module.exports = router;
