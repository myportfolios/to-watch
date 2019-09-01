import { combineReducers } from "redux";
import { suggestedMoviesReducer, latestMoviesReducer } from "./moviesReducer";

export default combineReducers({
  movies: suggestedMoviesReducer,
  latestMovies: latestMoviesReducer
});
