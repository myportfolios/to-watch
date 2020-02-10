const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const moviesCollectionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    overview: { type: String, required: true },
    year: { type: Number, required: true },
    poster: { type: String, required: true },
    rating: { type: Number, required: true },
    date: { type: Date, required: true }
  },
  {
    timestamps: true
  }
);

const Movies = mongoose.model("Movie Collections", moviesCollectionSchema);

module.exports = Movies;
