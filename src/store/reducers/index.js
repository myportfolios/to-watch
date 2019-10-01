import { combineReducers } from "redux";
import {
  suggestedMoviesReducer,
  latestMoviesReducer,
  getTrendyFilmsReducer,
  getOscarNominationsReducer,
  nominationUrlReducer,
  searchMovieReducer,
  getMoviesCollectionReducer
} from "./moviesReducer";

export default combineReducers({
  movies: suggestedMoviesReducer,
  latestMovies: latestMoviesReducer,
  trendyMovies: getTrendyFilmsReducer,
  oscarNominations: getOscarNominationsReducer,
  nominationUrl: nominationUrlReducer,
  searchMovie: searchMovieReducer,
  movieCollection: getMoviesCollectionReducer
});
