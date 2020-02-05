import React from "react";
import "./search-result.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchResultPresentation = ({
  searchMovieHandler,
  searchResult,
  selectedMoviesHandler,
  moviesCollectionHandler
}) => {
  return (
    <div>
      <h2 className="sub-heading align-center">Search Movies</h2>
      <p className="add-padding">
        Do you have a particular movie of interest in mind? That's ok. Type in
        the title of the movie and select it from the list.
      </p>
      <SearchInput searchMovieHandler={searchMovieHandler} />

      {!!searchResult.length ? (
        <SearchResultTable
          moviesCollectionHandler={moviesCollectionHandler}
          searchResult={searchResult}
          selectedMoviesHandler={selectedMoviesHandler}
        />
      ) : null}
    </div>
  );
};

export default SearchResultPresentation;

export const SearchInput = ({ searchMovieHandler }) => {
  return (
    <div className="search-icon-box">
      <input
        onKeyDown={e => {
          searchMovieHandler(e);
        }}
        type="text"
        placeholder="search movie...."
        className="text-input"
      />

      <FontAwesomeIcon icon="search" className="search-icon" />
    </div>
  );
};

export const SearchResultTable = ({
  searchResult,
  selectedMoviesHandler,
  moviesCollectionHandler
}) => {
  const searchResultJSX =
    searchResult &&
    searchResult.map((movie, index) => {
      return (
        <>
          <tr>
            <td>{index + 1}</td>
            <td className="movie-title-style">{movie.title}</td>
            <td>{movie.overview}</td>
            <td>{movie.release_date}</td>
            <td>{movie.vote_average}</td>
            <input
              id="checklist"
              type="checkbox"
              onClick={selectedMoviesHandler.bind(this, movie.id)}
            />
          </tr>
        </>
      );
    });
  return (
    <table className="table" id="search-table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Synopsis</th>
          <th scope="col">Year</th>
          {/* <th scope="col">Actor</th> */}
          <th scope="col">Rating</th>
        </tr>
      </thead>
      <tbody>{searchResultJSX}</tbody>
      {searchResult.length > 0 && (
        <button className="add-movies-btn" onClick={moviesCollectionHandler}>
          Add selected movies to watchlist
        </button>
      )}
    </table>
  );
};
