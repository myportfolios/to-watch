import React from "react";
import {
  BASE_URL,
  POSTER_SIZES
} from "../../store//reducers/reducer-constants";
import "./suggested-movies.css";
export default function SuggestedMoviesPresentation({
  latestMovies,
  randomMovies
}) {
  console.log(randomMovies);
  return (
    <div className="row">
      <FilterMoviesComponent className="col-lg-4" />
      <SuggestedMoviesGallery
        randomMovies={randomMovies}
        latestMovies={latestMovies}
        className="col-lg-8"
      />
    </div>
  );
}

const FilterMoviesComponent = () => {
  return (
    <div className="float-left">
      <span>Filter</span>
      <ul>
        <li>
          <a href="#">2019 Top Trendy Movies</a>
        </li>
        <li>
          <a href="#">Oscars</a>
        </li>
        <li>
          <a href="#">At the Cinemas</a>
        </li>
        <li>
          <a href="#">Espionages</a>
        </li>
        <li>
          <a href="#">Romance</a>
        </li>
        <li>
          <a href="#">Action</a>
        </li>
      </ul>
    </div>
  );
};

const SuggestedMoviesGallery = ({ randomMovies }) => {
  let randomMoviesJSX =
    randomMovies &&
    randomMovies.map(movie => {
      return (
        <div key={movie.title}>
          <img
            className="img_size"
            src={`${BASE_URL}${POSTER_SIZES}${movie.poster_path}`}
            alt="poster"
          />
          <h3 className="align-text">{movie.title}</h3>
          <h3>{movie.Rating}</h3>
        </div>
      );
    });

  return <div className="flex">{randomMoviesJSX}</div>;
};

/* 
<div>
      {latestMoviesJSX.map(movie => {
        return (
          <div key={movie.title}>
            <img
              className="img_size"
              src={`${BASE_URL}${POSTER_SIZES}${movie.poster_path}`}
              alt="poster"
            />
            <div className="flex">
              <h3>{movie.title}</h3>
              <h3>{movie.Rating}</h3>
            </div>
          </div>
        );
      })}
    </div>

////////////////////////////////////////////

const SuggestedMoviesGallery = ({ latestMovies }) => {
  let size = 4;
  let latestMoviesJSX =
    latestMovies &&
    latestMovies.slice(0, size).map(() => {
      return latestMovies.splice(
        Math.floor(Math.random() * latestMovies.length),
        1
      )[0];
    }, latestMovies.slice());

  let shuffledMoviesList =
    latestMoviesJSX &&
    latestMoviesJSX.map(movie => {
      console.log(latestMoviesJSX);
      return (
        <div key={movie.title}>
          <img
            className="img_size"
            src={`${BASE_URL}${POSTER_SIZES}${movie.poster_path}`}
            alt="poster"
          />
          <h3 className="align-text">{movie.title}</h3>
          <h3>{movie.Rating}</h3>
        </div>
      );
    });

  return <div className="flex">{shuffledMoviesList}</div>;
};

*/
