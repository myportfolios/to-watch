import { createSelector } from "reselect";

const moviesSelector = state => state && state.movieCollection;

export const myCollectionsSelector = createSelector(
  moviesSelector,
  moviesCollection => {
    return moviesCollection;
  }
);
