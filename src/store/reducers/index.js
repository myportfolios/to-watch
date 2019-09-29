import { combineReducers } from "redux";
import {
  suggestedMoviesReducer,
  latestMoviesReducer,
  getTrendyFilmsReducer,
  getOscarNominationsReducer,
  nominationUrlReducer,
  searchMovieReducer
} from "./moviesReducer";

export default combineReducers({
  movies: suggestedMoviesReducer,
  latestMovies: latestMoviesReducer,
  trendyMovies: getTrendyFilmsReducer,
  oscarNominations: getOscarNominationsReducer,
  nominationUrl: nominationUrlReducer,
  searchMovie: searchMovieReducer
});
