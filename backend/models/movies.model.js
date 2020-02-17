const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const moviesSchema = new Schema(
  {
    username: { type: String, required: true },
    title: {
      type: String,
      required: true,
      trim: true
    },
    overview: { type: String, required: true },
    year: { type: String, required: true },
    poster: { type: String, required: true },
    rating: { type: Number, required: true },
    date: { type: Date, required: true }
  },
  {
    timestamps: true
  }
);

const Movies = mongoose.model("Movies", moviesSchema);

module.exports = Movies;
