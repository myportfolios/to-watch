import {
  getActionTypes,
  ACTION_KEY_GET_SELECTED_MOVIES,
  ACTION_KEY_GET_LATEST_MOVIES,
  ACTION_KEY_TOP_TRENDY_FILMS
} from "../reducers/reducer-constants";

export const suggestedMoviesReducer = (
  state = {
    fetching: true,
    error: [],
    data: []
  },
  action = { type: "", payload: {} }
) => {
  const REDUCER_GET_SELECTED_MOVIES = getActionTypes(
    ACTION_KEY_GET_SELECTED_MOVIES
  );

  switch (action.type) {
    // Fetching ----------------------------------------------------

    case REDUCER_GET_SELECTED_MOVIES.FETCHING:
      return {
        ...state,
        fetching: true,
        error: []
      };

    // Fulfilled ----------------------------------------------------

    case REDUCER_GET_SELECTED_MOVIES.FULFILLED:
      return {
        ...state,
        data: action.payload.items,
        fetching: false,
        error: []
      };
    // Rejected ----------------------------------------------------

    case REDUCER_GET_SELECTED_MOVIES.REJECTED:
      return {
        ...state,
        fetching: false,
        error: action.payload.notifications
      };
    default:
      return state;
  }
};
// export default suggestedMoviesReducer;

export const latestMoviesReducer = (
  state = {
    fetching: true,
    error: [],
    data: []
  },
  action = { type: "", payload: {} }
) => {
  const REDUCER_GET_LATEST_MOVIES = getActionTypes(
    ACTION_KEY_GET_LATEST_MOVIES
  );

  switch (action.type) {
    // Fetching ----------------------------------------------------
    case REDUCER_GET_LATEST_MOVIES.FETCHING:
      return {
        ...state,
        fetching: true,
        error: []
      };

    // Fulfilled ----------------------------------------------------
    case REDUCER_GET_LATEST_MOVIES.FULFILLED: {
      return {
        // ...state,
        data: action.payload.results,
        fetching: false,
        error: []
      };
    }

    // Rejected ----------------------------------------------------
    case REDUCER_GET_LATEST_MOVIES.REJECTED:
      return {
        ...state,
        fetching: false,
        error: action.payload.notifications
      };
    default:
      return state;
  }
};
export const getTrendyFilmsReducer = (
  state = { fetching: true, data: [], error: [] },
  action = { type: "", payload: "" }
) => {
  const REDUCER_GET_TRENDY_MOVIES = getActionTypes(ACTION_KEY_TOP_TRENDY_FILMS);
  switch (action.type) {
    // Fetching ----------------------------------------------------
    case REDUCER_GET_TRENDY_MOVIES.FETCHING:
      return {
        fetching: true,
        data: [],
        error: []
      };
    // Fulfilled ----------------------------------------------------
    case REDUCER_GET_TRENDY_MOVIES.FULFILLED:
      const data = action.payload.results;

      return {
        fetching: false,
        data,
        error: []
      };

    // Rejected ----------------------------------------------------
    case REDUCER_GET_TRENDY_MOVIES.REJECTED:
      const error = action.payload.notifications;
      return {
        fetching: false,
        data: [],
        error
      };
    default:
      return state;
  }
};
