import React from "react";
import "./search-result.css";

export const SearchResultPresentation = ({ listOfMovies }) => {
  return (
    <div>
      <h2 className="sub-heading">Suggested Movies</h2>
      <SearchResultTable />
    </div>
  );
};

export default SearchResultPresentation;

const SearchResultTable = () => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Year</th>
            <th scope="col">Actor</th>
            <th scope="col">Rating</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};
