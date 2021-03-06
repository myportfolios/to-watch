import {
  getActionTypes,
  ACTION_KEY_GET_SELECTED_MOVIES,
  ACTION_KEY_GET_LATEST_MOVIES,
  ACTION_KEY_TOP_TRENDY_FILMS,
  ACTION_KEY_GET_OSCAR_NOMINATIONS,
  ACTION_KEY_GET_NOMINATION_URL,
  ACTION_KEY_SEARCH_MOVIES,
  ACTION_KEY_GET_MOVIES_COLLECTION,
  ACTION_KEY_AT_THE_CINEMAS,
  ACTION_SAVE_USER_DETAILS
} from "store/reducers/reducer-constants";

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
        data: action.payload.results,
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
      //convert the object response into an array of objects
      let res = action.payload;
      // let dataArray = Object.keys(res).map(item => {
      //   return res[item];
      // });

      return {
        // ...state,
        data: [res],
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

var initialState = [];
export const getOscarNominationsReducer = (
  state = { fetching: true, data: initialState, notifications: [] },
  action = { type: "", payload: {} }
) => {
  const REDUCER_GET_OSCAR_NOMINATIONS = getActionTypes(
    ACTION_KEY_GET_OSCAR_NOMINATIONS
  );
  switch (action.type) {
    // Fetching ----------------------------------------------------
    case REDUCER_GET_OSCAR_NOMINATIONS.FETCHING:
      return {
        fetching: true,
        data: initialState,
        notifications: []
      };
    // Fulfilled ----------------------------------------------------
    case REDUCER_GET_OSCAR_NOMINATIONS.FULFILLED:
      const data = action.payload.items;

      return {
        fetching: false,
        data,
        notifications: []
      };
    // Rejected ----------------------------------------------------
    case REDUCER_GET_OSCAR_NOMINATIONS.REJECTED:
      const error = action.payload.notifications;
      return {
        fetching: false,
        data: initialState,
        notifications: error
      };
    default:
      return state;
  }
};
export const nominationUrlReducer = (
  state = [],
  action = { type: "", payload: "" }
) => {
  if (action.type === ACTION_KEY_GET_NOMINATION_URL) {
    const data = action.payload;

    return {
      data
    };
  } else {
    return state;
  }
};
export const searchMovieReducer = (
  state = { fetching: true, data: [], notifications: [] },
  action = { type: "", payload: "" }
) => {
  const REDUCER_SEARCH_MOVIES = getActionTypes(ACTION_KEY_SEARCH_MOVIES);
  switch (action.type) {
    case REDUCER_SEARCH_MOVIES.FETCHING:
      return {
        fetching: true,
        data: [],
        notifications: []
      };
    case REDUCER_SEARCH_MOVIES.FULFILLED:
      let data = action.payload.results;

      return {
        fetching: false,
        data,
        notifications: []
      };
    default:
      return state;
  }
};

export const getMoviesCollectionReducer = (
  state = {},
  action = { type: "", payload: "" }
) => {
  switch (action.type) {
    case ACTION_KEY_GET_MOVIES_COLLECTION:
      return {
        ...state,
        data: action.payload
      };

    default:
      return state;
  }
};

export const getCinemaMoviesReducer = (
  state = { fetching: true, data: [], notifications: [] },
  action = { type: "", payload: "" }
) => {
  const REDUCER_CINEMAS = getActionTypes(ACTION_KEY_AT_THE_CINEMAS);
  switch (action.type) {
    case REDUCER_CINEMAS.FETCHING:
      return {
        fetching: true,
        data: [],
        notifications: []
      };
    case REDUCER_CINEMAS.FULFILLED:
      const data = action.payload.results;

      return {
        fetching: false,
        data,
        notifications: []
      };
    case REDUCER_CINEMAS.REJECTED:
      return {
        fetching: false,
        data: [],
        notifications: []
      };
    default:
      return state;
  }
};

export const saveUserDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION_SAVE_USER_DETAILS:
      const { name, value } = action;
      //return the state with updated fields and values
      return {
        ...state,
        // userData: {
        //   [name]: value
        // }
        [name]: value
      };
    default:
      return state;
  }
};
