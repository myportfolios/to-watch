import { combineReducers } from "redux";
import {
  suggestedMoviesReducer,
  latestMoviesReducer,
  getTrendyFilmsReducer,
  getOscarNominationsReducer,
  nominationUrlReducer,
  searchMovieReducer,
  getMoviesCollectionReducer,
  getCinemaMoviesReducer
} from "./moviesReducer";
import authReducer from "store/reducers/authReducer";
export default combineReducers({
  movies: suggestedMoviesReducer,
  latestMovies: latestMoviesReducer,
  trendyMovies: getTrendyFilmsReducer,
  oscarNominations: getOscarNominationsReducer,
  nominationUrl: nominationUrlReducer,
  searchMovie: searchMovieReducer,
  movieCollection: getMoviesCollectionReducer,
  atTheCinemas: getCinemaMoviesReducer,
  auth: authReducer
});
