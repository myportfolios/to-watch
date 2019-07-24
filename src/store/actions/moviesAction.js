import { ACTION_KEY_GET_SELECTED_MOVIES} from "../reducers/reducer-constants";
// import moviesData from '../../utils/movies-mock-data';
import {HTTP_METHODS, API_URL} from '../../services/constants';
import { fetchCommon } from "../../services/api";

// export const getMovies = (action,payload) => {
//   return {
//     type:GET_MOVIES,
//     payload:payload,
//   }
// };
 
// export const getMovies = () => {
//   return async (dispatch) => {
//     const res = await fetch("moviesData")
//       .then((response) => {
//           return response.json();
//       })
//       dispatch({type:"GET_MOVIES", payload: res})
//   }
  
// }

// export const getSuggestedMovies = () => (dispatch) => {
//   return fetchCommon(`${API_URL.SUGGESTED_MOVIES}`,HTTP_METHODS.GET) 
//       (dispatch, ACTION_KEY_GET_SELECTED_MOVIES);
// }

export const getSuggestedMovies = () => (dispatch) => {
  console.log(API_URL.SUGGESTED_MOVIES)
  return fetchCommon(
    API_URL.SUGGESTED_MOVIES,
    {},
    HTTP_METHODS.GET
    )(dispatch, ACTION_KEY_GET_SELECTED_MOVIES);
}
