import React from "react";
import {
  BASE_URL,
  POSTER_SIZES
} from "../../store//reducers/reducer-constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./suggested-movies.css";
import { useState } from "react";
export default function SuggestedMoviesPresentation({
  randomMovies,
  trendyMoviesHandler,
  isLatestMoviesCalled,
  isTrendyMoviesCalled,
  oscarsMoviesHandler
}) {
  const [showOscars, setShowOscars] = useState(false);
  return (
    <div className="row">
      <FilterMoviesComponent
        className="col-lg-4"
        trendyMoviesHandler={trendyMoviesHandler}
        oscarsMoviesHandler={oscarsMoviesHandler}
        showOscars={showOscars}
        setShowOscars={setShowOscars}
      />

      <SuggestedMoviesGallery
        randomMovies={randomMovies}
        isLatestMoviesCalled={isLatestMoviesCalled}
        isTrendyMoviesCalled={isTrendyMoviesCalled}
        className="col-lg-8"
      />
    </div>
  );
}

const FilterMoviesComponent = ({
  trendyMoviesHandler,
  oscarsMoviesHandler,
  showOscars,
  setShowOscars
}) => {
  return (
    <div className="float-left">
      <span>Filter</span>

      <p onClick={trendyMoviesHandler}>2019 Top Trendy Movies</p>

      <p onClick={() => setShowOscars(!showOscars)}>Oscars</p>
      {showOscars ? (
        <>
          <p
            onClick={nomination => {
              oscarsMoviesHandler(nomination);
            }}
          >
            2012 Oscar Nominations
          </p>
          <p
            onClick={nomination => {
              oscarsMoviesHandler(nomination);
            }}
          >
            2011 Oscar Nominations
          </p>
          <p
            onClick={nomination => {
              oscarsMoviesHandler(nomination);
            }}
          >
            2010 Oscar Nominations
          </p>
          <p
            onClick={nomination => {
              oscarsMoviesHandler(nomination);
            }}
          >
            2009 Oscar Nominations
          </p>
        </>
      ) : (
        <>
          <p>
            <a href="#">At the Cinemas</a>
          </p>
          <p>
            <a href="#">Espionages</a>
          </p>
          <p>
            <a href="#">Romance</a>
          </p>
          <p>
            <a href="#">Action</a>
          </p>
        </>
      )}
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
