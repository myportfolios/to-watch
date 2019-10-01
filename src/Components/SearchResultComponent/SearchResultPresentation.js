import React from "react";
import "./search-result.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchResultPresentation = ({
  searchMovieHandler,
  searchResult,
  selectedMoviesHandler
}) => {
  return (
    <div>
      <h2 className="sub-heading align-center">Search Movies</h2>
      <p>
        Do you have a particular movie of interest in mind? That's ok. Type in
        the title of the movie and select it from the list.
      </p>
      <SearchInput searchMovieHandler={searchMovieHandler} />
      <SearchResultTable
        searchResult={searchResult}
        selectedMoviesHandler={selectedMoviesHandler}
      />
    </div>
  );
};

export default SearchResultPresentation;

export const SearchInput = ({ searchMovieHandler }) => {
  return (
    <div className="search-icon-box">
      <input
        onKeyPress={e => {
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

const SearchResultTable = ({ searchResult, selectedMoviesHandler }) => {
  const searchResultJSX =
    searchResult &&
    searchResult.map((movie, index) => {
      return (
        <>
          <tr>
            <td>{index + 1}</td>
            <td>{movie.title}</td>
            <td>{movie.overview}</td>
            <td>{movie.release_date}</td>
            <td>{movie.vote_average}</td>
            <input
              type="checkbox"
              onClick={selectedMoviesHandler.bind(this, movie.id)}
            />
          </tr>
        </>
      );
    });
  return (
    <div>
      <table className="table">
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
        {searchResult.length > 0 && <button>Add Selected to watch list</button>}
      </table>
    </div>
  );
};
