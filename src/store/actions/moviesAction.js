import {
  ACTION_KEY_GET_SELECTED_MOVIES,
  ACTION_KEY_GET_LATEST_MOVIES,
  ACTION_KEY_TOP_TRENDY_FILMS,
  ACTION_KEY_GET_OSCAR_NOMINATIONS,
  ACTION_KEY_GET_NOMINATION_URL,
  ACTION_KEY_SEARCH_MOVIES,
  ACTION_KEY_GET_MOVIES_COLLECTION,
  ACTION_KEY_AT_THE_CINEMAS,
  ACTION_KEY_POST_SELECTED_MOVIES,
  ACTION_KEY_SIGN_IN,
  ACTION_KEY_SIGN_OUT,
  ACTION_SAVE_USER_DETAILS
} from "store/reducers/reducer-constants";
import { HTTP_METHODS, API_URL, API_ENDPOINT } from "services/constants";
import { fetchCommon } from "services/api";
import axios from "axios";

// export const getSuggestedMovies = () => dispatch => {
//   return fetchCommon(
//     API_URL.SUGGESTED_MOVIES,
//     {},
//     HTTP_METHODS.GET
//   )(dispatch, ACTION_KEY_GET_SELECTED_MOVIES);
// };
export const getSuggestedMovies = () => dispatch => {
  return fetchCommon(
    API_URL.SUGGESTED_MOVIES,
    {},
    HTTP_METHODS.GET
  )(dispatch, ACTION_KEY_GET_SELECTED_MOVIES);
};
export const getLatestMovies = () => dispatch => {
  return fetchCommon(
    API_URL.LATEST_MOVIES,
    {},
    HTTP_METHODS.GET
  )(dispatch, ACTION_KEY_GET_LATEST_MOVIES);
};
export const getTrendyFilms = () => dispatch => {
  return fetchCommon(
    API_URL.DAILY_TRENDING_MOVIES,
    {},
    HTTP_METHODS.GET
  )(dispatch, ACTION_KEY_TOP_TRENDY_FILMS);
};

export const getOscarNominations = nominationUrl => dispatch => {
  return fetchCommon(
    nominationUrl,
    {},
    HTTP_METHODS.GET
  )(dispatch, ACTION_KEY_GET_OSCAR_NOMINATIONS);
};
export const saveNominationUrlToStore = nominationUrl => {
  return {
    type: ACTION_KEY_GET_NOMINATION_URL,
    payload: nominationUrl
  };
};

export const searchMovies = title => dispatch => {
  let searchUrl = `${API_URL.SEARCH_MOVIES}${title}`;

  return fetchCommon(
    searchUrl,
    {},
    HTTP_METHODS.GET
  )(dispatch, ACTION_KEY_SEARCH_MOVIES);
};
export const getMoviesCollection = selectedMovies => {
  return {
    type: ACTION_KEY_GET_MOVIES_COLLECTION,
    payload: selectedMovies
  };
};
export const getCinemasMovies = () => dispatch => {
  return fetchCommon(
    API_URL.CINEMAS_MOVIES,
    {},
    HTTP_METHODS.GET
  )(dispatch, ACTION_KEY_AT_THE_CINEMAS);
};
export const signIn = (userId, username) => {
  return {
    type: ACTION_KEY_SIGN_IN,
    payload: { userId, username }
  };
};

export const signOut = () => {
  return {
    type: ACTION_KEY_SIGN_OUT
  };
};

export const postMoviesCollection = () => (dispatch, getState) => {
  const movieCollections = getState().movieCollection.data;
  let username = getState().auth.username;
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let movieCollectionsJSX = movieCollections.map(Items =>
    Items.map(movie => {
      return {
        username,
        title: movie.title,
        overview: movie.overview,
        year: movie.release_date /*string*/,
        poster: movie.poster_path,
        rating: Number(movie.popularity) /*Number*/,
        date /*string*/
      };
    })
  );
  // let movieCollectionsJSON = JSON.stringify(movieCollectionsJSX);
  console.log(API_ENDPOINT.POST_SELECTED_MOVIES);
  console.log(window.location.origin);
  // return fetchCommon(
  //   API_ENDPOINT.POST_SELECTED_MOVIES,
  //   { movieCollectionsJSX },
  //   HTTP_METHODS.POST
  // )(dispatch, ACTION_KEY_POST_SELECTED_MOVIES);
  axios
    .post("http://localhost:5000/movies/add", movieCollectionsJSX)
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log("Error by Alex", err));
};
export const saveUserDetailsToStore = (name, value) => {
  return {
    type: ACTION_SAVE_USER_DETAILS,
    name,
    value
  };
};
