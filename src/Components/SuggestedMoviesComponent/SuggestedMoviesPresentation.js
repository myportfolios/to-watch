import React from "react";
import {
  BASE_URL,
  POSTER_SIZES
} from "../../store//reducers/reducer-constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./suggested-movies.css";
export default function SuggestedMoviesPresentation({
  latestMovies,
  randomMovies,
  filmFilterHandler,
  isLatestMoviesCalled,
  isTrendyMoviesCalled
}) {
  return (
    <div className="row">
      <FilterMoviesComponent
        className="col-lg-4"
        filmFilterHandler={filmFilterHandler}
      />

      <SuggestedMoviesGallery
        randomMovies={randomMovies}
        latestMovies={latestMovies}
        isLatestMoviesCalled={isLatestMoviesCalled}
        isTrendyMoviesCalled={isTrendyMoviesCalled}
        className="col-lg-8"
      />
    </div>
  );
}

const FilterMoviesComponent = ({ filmFilterHandler }) => {
  return (
    <div className="float-left">
      <span>Filter</span>
      <ul>
        <li onClick={filmFilterHandler}>
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
      <SearchInput />
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

export const SearchInput = () => {
  return (
    <div className="search-icon-box">
      <input
        type="text"
        placeholder="search movie...."
        className="text-input"
      />

      <FontAwesomeIcon icon="search" className="search-icon" />
    </div>
  );
};
