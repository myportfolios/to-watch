/**************************************************/
/*Action and Reducer Keys*/
/**************************************************/

export const getActionTypes = actionKey => {
  return {
    FETCHING: `${actionKey}_fetching`,
    FULFILLED: `${actionKey}_fulfilled`,
    REJECTED: `${actionKey}_rejected`
  };
};

//API  related actions
export const ACTION_KEY_GET_SELECTED_MOVIES = "get_selected_movies";
export const ACTION_KEY_GET_LATEST_MOVIES = "get_latest_movies";
export const ACTION_KEY_TOP_TRENDY_FILMS = "get_top_trendy_films";
export const ACTION_KEY_ACTION_FOUR = "get_action_four";
export const ACTION_KEY_GET_OSCAR_NOMINATIONS = "get_oscar_nominations";
export const ACTION_KEY_SEARCH_MOVIES = "search_movies";
export const ACTION_KEY_AT_THE_CINEMAS = "at_the_cinemas";
export const ACTION_KEY_POST_SELECTED_MOVIES = "post_selected_movies";
export const ACTION_SAVE_USER_DETAILS = "save_user_details";

/**************************************************/
/*User  related actions*/
/**************************************************/

export const ACTION_KEY_GET_NOMINATION_URL = "nomination_url";
export const ACTION_KEY_GET_MOVIES_COLLECTION = "selected_movies";
export const ACTION_KEY_SIGN_IN = "sign_in";
export const ACTION_KEY_SIGN_OUT = "sign_out";

//CONFIGURATION API//
export const BASE_URL = "http://image.tmdb.org/t/p/";
export const POSTER_SIZES = "w500";
