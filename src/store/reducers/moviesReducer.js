import {getActionTypes,ACTION_KEY_GET_SELECTED_MOVIES} from '../reducers/reducer-constants';


export const moviesReducer = (
  state =  {
    fetching: true,
    error: [],
    data:[]}, 
    action = {type: "", payload: {}}
    ) => {
  const REDUCER_GET_SELECTED_MOVIES = getActionTypes(
    ACTION_KEY_GET_SELECTED_MOVIES
    );
  switch (action.type) {
    // Fetching ----------------------------------------------------
    case REDUCER_GET_SELECTED_MOVIES.FETCHING:
      return {
        ...state, fetching: true, error:[]
      };

      // Fulfilled ----------------------------------------------------
    case REDUCER_GET_SELECTED_MOVIES.FULFILLED:
      console.log(action.payload.items);
      return {
        ...state,
        data:action.payload.items,
        fetching: false,
        error: []
      };
      // Rejected ----------------------------------------------------
      case REDUCER_GET_SELECTED_MOVIES.REJECTED:
      return {
        ...state,
        fetching: false,
        error:action.payload.notifications
      }
      default:
        return state;
  }
};
export default moviesReducer; 
