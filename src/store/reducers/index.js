import { combineReducers } from "redux";
import {
  suggestedMoviesReducer,
  latestMoviesReducer,
  getTrendyFilmsReducer
} from "./moviesReducer";

export default combineReducers({
  movies: suggestedMoviesReducer,
  latestMovies: latestMoviesReducer,
  trendyMovies: getTrendyFilmsReducer
});
