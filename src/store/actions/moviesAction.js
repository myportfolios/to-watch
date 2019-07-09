import { GET_MOVIES } from "../actions/types";
import moviesData from '../../utils/movies-mock-data';

// export const getMovies = (action,payload) => {
//   return {
//     type:GET_MOVIES,
//     payload:payload,
//   }
// };
 
export const getMovies = () => {
  return async (dispatch) => {
    const res = await fetch("moviesData")
      .then((response) => {
          return response.json();
      })
      dispatch({type:"GET_MOVIES", payload: res})
  }
  
}