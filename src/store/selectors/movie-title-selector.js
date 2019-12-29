// Selectors can compute derived data, allowing Redux to store the minimal possible state.
// Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
// Selectors are composable. They can be used as input to other selectors.

import { createSelector } from "reselect";

const moviesListSelector = state => state && state.movies && state.movies.data;

export const getMoviesSelector = createSelector(
  moviesListSelector,
  moviesData => {
    let size = 4;
    let moviesDataJSX = moviesData.slice(0, size).map(movies => {
      return {
        title: movies.title,
        posterPath: movies.poster_path
      };
    });
    //map() returns a new array, we don't need to return [moviesDataJSX]. we just return `moviesDataJSX`
    return moviesDataJSX;
  }
);
