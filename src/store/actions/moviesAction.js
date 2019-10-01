import {
  ACTION_KEY_GET_SELECTED_MOVIES,
  ACTION_KEY_GET_LATEST_MOVIES,
  ACTION_KEY_TOP_TRENDY_FILMS,
  ACTION_KEY_GET_OSCAR_NOMINATIONS,
  ACTION_KEY_GET_NOMINATION_URL,
  ACTION_KEY_SEARCH_MOVIES,
  ACTION_KEY_GET_MOVIES_COLLECTION
} from "../reducers/reducer-constants";
// import moviesData from '../../utils/movies-mock-data';
import { HTTP_METHODS, API_URL } from "../../services/constants";
import { fetchCommon } from "../../services/api";

export const getSuggestedMovies = () => dispatch => {
  return fetchCommon(API_URL.SUGGESTED_MOVIES, {}, HTTP_METHODS.GET)(
    dispatch,
    ACTION_KEY_GET_SELECTED_MOVIES
  );
};
export const getLatestMovies = () => dispatch => {
  return fetchCommon(API_URL.LATEST_MOVIES, {}, HTTP_METHODS.GET)(
    dispatch,
    ACTION_KEY_GET_LATEST_MOVIES
  );
};
export const getTrendyFilms = () => dispatch => {
  return fetchCommon(API_URL.DAILY_TRENDING_MOVIES, {}, HTTP_METHODS.GET)(
    dispatch,
    ACTION_KEY_TOP_TRENDY_FILMS
  );
};

export const getOscarNominations = nominationUrl => dispatch => {
  return fetchCommon(nominationUrl, {}, HTTP_METHODS.GET)(
    dispatch,
    ACTION_KEY_GET_OSCAR_NOMINATIONS
  );
};
export const saveNominationUrlToStore = nominationUrl => {
  return {
    type: ACTION_KEY_GET_NOMINATION_URL,
    payload: nominationUrl
  };
};

export const searchMovies = title => dispatch => {
  let searchUrl = `${API_URL.SEARCH_MOVIES}${title}`;

  return fetchCommon(searchUrl, {}, HTTP_METHODS.GET)(
    dispatch,
    ACTION_KEY_SEARCH_MOVIES
  );
};
export const getselectedMovies = selectedMovies => {
  return {
    type: ACTION_KEY_GET_MOVIES_COLLECTION,
    payload: selectedMovies
  };
};
